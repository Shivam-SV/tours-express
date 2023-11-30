const express = require('express');
const router = express.Router();
const countryController = require('../controllers/country.controller');

// country routes
router.get('/countries', async  (req, res) => {
    res.json(await countryController.index());
});

router.get('/country/:id', async (req, res) => {
    res.json(await countryController.show(req.params.id));
});

router.post('/country',async  (req, res) => {
    res.json(await countryController.store(req.body));
});

router.put('/country/:id', async (req, res) => {
    res.json(await countryController.update(req.params.id,req.body));
});

router.delete('/country/:id', async (req, res) => {
    res.json(await countryController.delete(req.params.id));
});

module.exports = router;