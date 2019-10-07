const express = require('express');
const router = express.Router();
const service = require('./book.service');

router.get('/', async function (req, res) {
    try {
        const data = await service.find(req.query);
        res.status(200).send({
            data: data,
        });
    } catch(err) {
        res.status(500).send({
            error: err.message,
        })
    }
});

router.post('/', async function (req, res) {
    try {
        const data = await service.find(req.query);
        res.status(200).send({
            data: data,
        });
    } catch(err) {
        res.status(500).send({
            error: err.message,
        })
    }
});

router.get('//:id', async function (req, res) {
    try {
        const data = await service.findById(req.params.query, req.body);
        res.status(200).send({
            data: data,
        });
    } catch(err) {
        res.status(500).send({
            error: err.message,
        })
    }
});

router.put('/', async function (req, res) {
    try {
        const data = await service.update(req.params.query, req.body);
        res.status(200).send({
            data: data,
        });
    } catch(err) {
        res.status(500).send({
            error: err.message,
        })
    }
});

module.exports = router;