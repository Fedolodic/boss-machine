const meetingsRouter = require('express').Router();

module.exports = meetingsRouter;

const {
    getAllFromDatabase,
    addToDatabase,
    deleteAllFromDatabase,
    createMeeting
} = require('../db');

// GET /api/meetings to get an array of all meetings
meetingsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('meetings'));
})

// POST /api/meetings to create a new meeting and save it to the database
meetingsRouter.post('/', (req, res, next) => {
    let newMeeting = addToDatabase('meetings', createMeeting());
    res.status(201).send(newMeeting);
})

// DELETE /api/meetings to delete all meetings from the database
