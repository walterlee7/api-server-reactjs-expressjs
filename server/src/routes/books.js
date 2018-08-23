const express = require('express');
const store = require('../bookstore');

const router = express.Router();

router.get('/:id?', (req, res) => {
    const id = req.params.id;

    if (!id) {
        res.json(store.GetBooks());
        return;
    }

    res.json(store.GetBook(id));
});

router.post('/', (req, res) => {
    store.CreateBook(req.body);

    res.sendStatus(200);
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const Book = store.GetBook(id);

    if (!Book || Object.keys(Book).length === 0) {
        res.sendStatus(404);
        return;
    }

    store.UpdateBook(id, req.body);

    res.sendStatus(200);
});

router.delete('/:id', (req, res) => {
    store.DeleteBook(req.params.id);

    res.sendStatus(200);
});

module.exports = router;
