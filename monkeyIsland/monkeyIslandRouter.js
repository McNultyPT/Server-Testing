const router = require('express').Router();

const Chars = require('./monkeyIslandModel.js');

router.post('/', async (req, res) => {
    try {
        const char = await Chars.add(req.body);
        res.status(201).json(char);
    } catch(err) {
        res.status(500).json({ error: 'Error adding the character.' });
    }
});

module.exports = router;