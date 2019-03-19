const router = require('express').Router();

const Chars = require('./monkeyIslandModel.js');

router.post('/', async (req, res) => {
    try {
        const char = await Chars.add(req.body);
        res.status(201).json(char);
    }
    catch(err) {
        console.log(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const count = await Chars.remove(req.params.id);
        if (count > 0) {
            res.status(204).json({ message: 'Character deleted.' });
        } else {
            res.status(404).json({ errorMessage: 'Character not found.' });
        }
    } catch(err) {
        res.status(500).json({ error: 'Error removing the character.' });
    }
});

module.exports = router;

