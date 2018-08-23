const express = require('express');
const store = require('../chirpstore');

const router = express.Router();

router.get('/:id?', (req, res) => {
    const id = req.params.id;

    if (!id) {
        res.json(store.GetChirps());
        return;
    }

    res.json(store.GetChirp(id));
});

router.post('/', (req, res) => {
    store.CreateChirp(req.body);

    res.sendStatus(200);
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const Chirp = store.GetChirp(id);

    if (!Chirp || Object.keys(Chirp).length === 0) {
        res.sendStatus(404);
        return;
    }

    store.UpdateChirp(id, req.body);

    res.sendStatus(200);
});

router.delete('/:id', (req, res) => {
    store.DeleteChirp(req.params.id);

    res.sendStatus(200);
});

module.exports = router;
