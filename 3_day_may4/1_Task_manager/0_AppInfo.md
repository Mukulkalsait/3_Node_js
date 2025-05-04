# How to use

node app.js

<!-- Y: WELCOME PAGE -->

 curl http://localhost:3000/api/

<!-- Y: LIST -->

 curl http://localhost:3000/api/tasks/

<!-- Y: ADD -->

 curl -X POST http://localhost:3000/api/tasks  
 -H "Content-Type: application/json"
-d '{"title":"Learn Rust"}'

<!-- Y: MARK DONE -->

 curl -X PATCH http://localhost:3000/api/tasks/1/done

taskId = 1

<!-- Y:DELETE -->

 curl -X DELETE http://localhost:3000/api/tasks/8

taskId = 8
