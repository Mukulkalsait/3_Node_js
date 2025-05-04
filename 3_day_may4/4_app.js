const logger = require('./3_logger.js');
const NodeTutorial = require('./2_nodeTutorial.js').NodeTutorial; // Y: 👈 This returns an object with NodeTutorial key
const http = require('http');

logger.log('---------------- App started ----------------');

const tutor = new NodeTutorial();
tutor.pTutor();

logger.log('---------------- Tutor end ----------------');
logger.log('---------------- Server Started ----------------');

http
  .createServer(function (req, res) {
    if (req.url === '/') {
      res.writeHead(200, { 'content-type': 'text/plain' });
      res.end('Welcome to the Node tutorila Home.');
    } else if (req.url === '/tutorial') {
      res.writeHead(200, { 'content-type': 'text/plain' });
      tutor.pTutor();
      res.end('check console for tutorial OP.');
    } else {
      res.writeHead(200, { 'content-type': 'text/plain' });
      res.end('Error:404 (not found)');
    }
  })
  .listen(8080, () => {
    logger.log('Server Running At http://localhost:8080');
  });
