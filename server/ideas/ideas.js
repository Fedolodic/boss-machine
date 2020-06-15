const ideasRouter = require('express').Router();

module.exports = ideasRouter;

const {
    getAllFromDatabase,
    addToDatabase,
    getFromDatabaseById,
    updateInstanceInDatabase,
    deleteFromDatabasebyId
} = require('../db');

ideasRouter.param('id', (req, res, next, id) => {
   const idea = getFromDatabaseById('ideas', id);
   if (idea) {
       req.idea = idea;
       next();
   } else {
       res.status(404).send();
   }
});

// GET /api/ideas to get an array of all ideas
ideasRouter.get('/', (req, res, next) => {
   res.send(getAllFromDatabase('ideas'));
});

// POST /api/ideas to create a new idea and save it to the database
ideasRouter.post('/', (req, res, next) => {
   const newIdea = addToDatabase('ideas', req.body);
   res.status(201).send(newIdea);
});

// GET /api/ideas/:ideaId to get a single idea by id
ideasRouter.get('/id', (req, res, next) => {
    res.send(req.idea);
});

// PUT /api/ideas/:ideaId to update a single idea by id
ideaRouter.put('/:id', (req, res, next) => {
    let updatedInstance = updateInstanceInDatabase('ideas', req.body);
    res.send(req.idea);
});

// DELETE /api/ideas/:ideaId to delete a single idea by id
