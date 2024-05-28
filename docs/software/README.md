# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення та початкового наповнення бази даних

```sql
CREATE OR REPLACE DATABASE mydb;
USE mydb;

CREATE OR REPLACE USER if not exists `user`@`localhost` IDENTIFIED BY 'GuranecSQL';
GRANT ALL PRIVILEGES ON mydb.* TO `user`@`localhost`;

CREATE TABLE account (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    username VARCHAR(64),
    password CHAR(128)
);

CREATE TABLE survey (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    isPaused BOOLEAN,
    isNamed BOOLEAN,
    name VARCHAR(256),
    duration VARCHAR(256),
    account_id INT NOT NULL REFERENCES account(id)
);

CREATE TABLE question (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    text VARCHAR(256),
    survey_id INT NOT NULL REFERENCES survey(id)
);

CREATE TABLE link (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    uses INT,
    responces INT,
    usageLimit INT,
    responceLimit INT,
    path VARCHAR(256),
    survey_id INT NOT NULL REFERENCES survey(id)
);

CREATE TABLE response (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    value TEXT(16384),
    question_id INT NOT NULL REFERENCES question(id),
    account_id INT REFERENCES account(id)
);

INSERT INTO mydb.account (username, password) VALUES ('placeholder', 'placeholder_password');
INSERT INTO mydb.survey (isPaused, isNamed, name, duration, account_id) VALUES (TRUE, TRUE, 'placeholder survey', 1, 1);
INSERT INTO mydb.question (text, survey_id) VALUES ('placeholder question', 1);

INSERT INTO mydb.response (value, question_id)
VALUES
    ('Yes', 1),
    ('No', 1),
    ('Квантова фізика', 1),
    ('Плутон', 1),
    ('De revolutionibus orbium coelestium', 1),
    ('Геродот', 1),
    ('Римська імперія', 1);
```

## RESTfull сервіс для управління даними на python з використанням Flask
__service.py__:
```python
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
        
        cursor.execute('DELETE FROM account WHERE id = ?', (id,))

        connection.commit()
        cursor.close()
        connection.close()
        return jsonify({"success": f"Акаунт з ID {id} успішно видалено"}), 200
    except mariadb.Error as e:
        return jsonify({"error": f"Помилка видалення акаунта: {e}"}), 500


if __name__ == '__main__':
    app.run(debug=False)
```

__config.py__:
```python
config = {
    'user': 'user',
    'password': 'GuranecSQL',
    'host': 'localhost',
    'port': 3306,
    'database': 'mydb'
}
```
