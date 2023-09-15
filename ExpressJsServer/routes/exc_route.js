const express = require('express');
const router = express.Router();
const Llogaria = require('../models/Llogaria');
const Transaksioni = require('../models/Transaksioni');

router.get('/trans', async (req, res) => {
    try {
        const data = await Transaksioni.find()
        res.json(data)
    } catch (err) {
        console.log(err);
    }
})

router.post('/trans', async (req, res) => {
    try {
        const ll = new Transaksioni(req.body);
        const response = await ll.save();
        res.json(response)
    } catch (err) {
        console.log(err);
    }
});

router.get('/trans/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const ll = await Transaksioni.findById(id);
        res.json(ll);
    } catch (err) {
        console.log(err);
    }
});

router.put('/trans/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const ll = await Transaksioni.findByIdAndUpdate(id, updatedData, { new: true });
        res.json(ll);
    } catch (err) {
        console.log(err);
    }
});

router.delete('/trans/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await Transaksioni.findByIdAndRemove(id);
        res.json({ message: 'Transaction deleted successfully.' });
    } catch (err) {
        console.log(err);
    }
});

router.get('/', async (req, res) => {
    try {
        const data = await Llogaria.find()
        res.json(data)
    } catch (err) {
        console.log(err);
    }
})

router.post('/', async (req, res) => {
    try {
        const ll = new Llogaria(req.body);
        const response = await ll.save();
        res.json(response)
    } catch (err) {
        console.log(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const ll = await Llogaria.findById(id);
        res.json(ll);
    } catch (err) {
        console.log(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const ll = await Llogaria.findByIdAndUpdate(id, updatedData, { new: true });
        res.json(ll);
    } catch (err) {
        console.log(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await Llogaria.findByIdAndRemove(id);
        res.json({ message: 'Llogaria deleted successfully.' });
    } catch (err) {
        console.log(err);
    }
});



module.exports = router