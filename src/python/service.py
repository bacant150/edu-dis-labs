from flask import Flask, request, jsonify, Response
import mariadb
from config import config

app = Flask(__name__)


def connect() -> mariadb.Connection | tuple[Response, int]:
    try:
        connection = mariadb.connect(**config)
        return connection
    except mariadb.Error as e:
        return jsonify({"error": f"Помилка підключення до бази даних: {e}"}), 500


@app.route('/')
def root():
    return "<p>Root of the server</p>"


@app.route('/responses', methods=['GET'])
def get_responses():
    try:
        connection = connect()
        if not isinstance(connection, mariadb.Connection):
            return connection
        cursor = connection.cursor()

        cursor.execute('SELECT * FROM response')
        accounts = cursor.fetchall()

        cursor.close()
        connection.close()
        return jsonify(accounts)
    except mariadb.Error as e:
        return jsonify({"error": f"Помилка підключення до бази даних: {e}"}), 500


@app.route('/response/<int:id>', methods=['GET'])
def get_response_by_id(id):
    try:
        connection = connect()
        if not isinstance(connection, mariadb.Connection):
            return connection
        cursor = connection.cursor()

        cursor.execute('SELECT * FROM response where id = ?', (id,))
        response = cursor.fetchone()

        cursor.close()
        connection.close()
        if response is None:
            return jsonify({"error": "Відповідь не знайдено"}), 404
        return jsonify(response)
    except mariadb.Error as e:
        return jsonify({"error": f"Помилка підключення до бази даних: {e}"}), 500


@app.route('/response', methods=['POST'])
def create_response():
    try:
        new_account = request.json
        connection = connect()
        if not isinstance(connection, mariadb.Connection):
            return connection
        cursor = connection.cursor()

        if new_account.get('value') is not None and new_account.get('question_id') is not None:
            cursor.execute(
                'INSERT INTO response (value, question_id) VALUES (?, ?)',
                (new_account.get('value'), new_account.get('question_id'))
            )

        connection.commit()
        cursor.close()
        connection.close()
        return jsonify({"success": "Відповідь створено успішно", "data": new_account}), 201
    except mariadb.Error as e:
        return jsonify({"error": f"Помилка створення відповіді: {e}"}), 500


@app.route('/response/<int:id>', methods=['PUT'])
def update_response(id):
    try:
        updated_account = request.json
        sql_query = ''
        connection = connect()
        if not isinstance(connection, mariadb.Connection):
            return connection
        cursor = connection.cursor()

        if updated_account.get('value') is not None and updated_account.get('question_id') is not None:
            cursor.execute(
                'UPDATE response SET value = ?, question_id = ? WHERE id = ?',
                (updated_account.get('value'), updated_account.get('question_id'), id)
            )
        elif updated_account.get('value') is not None:
            cursor.execute(
                'UPDATE response SET value = ? WHERE id = ?',
                (updated_account.get('value'), id)
            )
        elif updated_account.get('question_id') is not None:
            cursor.execute(
                'UPDATE response SET question_id = ? WHERE id = ?',
                (updated_account.get('question_id'), id)
            )

        connection.commit()
        cursor.close()
        connection.close()
        if cursor.rowcount == 0:
            return jsonify({"error": f"Помилка оновлення: Відповіді з таким id не існує"}), 404
        else:
            return jsonify({"success": f"Відповідь з ID {id} успішно оновлено", "data": updated_account}), 202
    except mariadb.Error as e:
        return jsonify({"error": f"Помилка оновлення відповіді: {e}"}), 500


@app.route('/response/<int:id>', methods=['DELETE'])
def delete_response(id):
    try:
        connection = connect()
        if not isinstance(connection, mariadb.Connection):
            return connection
        cursor = connection.cursor()
        
        cursor.execute('DELETE FROM response WHERE id = ?', (id,))

        connection.commit()
        cursor.close()
        connection.close()
        return jsonify({"success": f"Акаунт з ID {id} успішно видалено"}), 200
    except mariadb.Error as e:
        return jsonify({"error": f"Помилка видалення акаунта: {e}"}), 500


if __name__ == '__main__':
    app.run(debug=False)
