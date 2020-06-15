const ideasRouter = require('express').Router();

module.exports = ideasRouter;

const {
    getAllFromDatabase,
    addToDatabase,
    getFromDatabaseById,
    updateInstanceInDatabase,
    deleteFromDatabasebyId
} = require('../db');

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

// PUT /api/ideas/:ideaId to update a single idea by id

// DELETE /api/ideas/:ideaId to delete a single idea by id