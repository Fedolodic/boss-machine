const express = require('express');
const apiRouter = express.Router();

const minionsRouter = require('./minions/minions');
const ideasRouter = require('./ideas/ideas');
const meetingsRouter = require('./meetings/meetings');

// Can I use .use() with arrays?
apiRouter.use(['/minions', '/ideas', '/meetings'], [minionsRouter, ideasRouter, meetingsRouter]);

module.exports = apiRouter;
