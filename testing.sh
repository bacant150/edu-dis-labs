#!/bin/bash

(set -x; curl -s -X GET http://127.0.0.1:5000/responses | jq)
echo

(set -x; curl -s -X GET http://127.0.0.1:5000/response/3 | jq)
echo

(set -x; curl -s -X POST -d '{"value":"example post","question_id":"1"}' --header "Content-Type: application/json" http://127.0.0.1:5000/response | jq)
echo

(set -x; curl -s -X GET http://127.0.0.1:5000/response/9 | jq)
echo

(set -x; curl -s -X PUT -d '{"value":"example put edit"}' --header "Content-Type: application/json" http://127.0.0.1:5000/response/9 | jq)
echo

(set -x; curl -s -X GET http://127.0.0.1:5000/response/9 | jq)
echo

(set -x; curl -s -X DELETE http://127.0.0.1:5000/response/9 | jq)
echo

(set -x; curl -s -X GET http://127.0.0.1:5000/response/9 | jq)
echo
