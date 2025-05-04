# 1.Implementation Of modular NODE.JS stracture using: require , exports modules.

1. In 1_tutorial we creted & EXPORTED a small fn tutorial.
2. In 2_nodeTutorial.js we:
   required ./1_tutorial.js
   created & EXPORTED fn NodeTutorial, inside created pTutor() method,
   which calls tutorial() from base module.
3. require ./2_nodeTutorial.js in localTutor and use
   var nt(nodeTutor) to create new localTutor.NodeTutorial() <a constructor type call>
   and then we call nt.pTutor();

# Use cases:

Split functionality into small, manageable files (modules) like:

    database.js

    userController.js

    authMiddleware.js

    utils/logger.js

Each file handles a specific task.
