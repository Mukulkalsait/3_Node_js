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

<!--
NOTE:
========================
1. While specifying method use
  '-X' <method>
2. -H = Header
3. -d = Data
-->

<!--
G:
folderStracture
-----------------------------------
project/
├── app.js
├── routes/
│   └── taskRoutes.js
├── controllers/          {services in this app}
│   └── taskController.js
├── models/
│   └── taskModel.js
├── utils/
│   └── cleanConsoleUtil.js
│
│
-->
