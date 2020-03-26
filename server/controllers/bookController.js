const db = require('../models');

const bookController = {
    findAll: (req, res) => {
        db.Book
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: (req, res) => {
        db.Book
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: (req, res) => {
        db.Book
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    update: (req, res) => {
        db.Book
            .findOneAndUpdate({_id: req.params.id}, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    remove: (req, res) => {
        db.Book
            .findByIdAndDelete({_id: req.params.id})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }
}

module.exports = bookController; 