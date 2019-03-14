const db = require('../data/dbConfig.js');

module.exports = {
    findById,
    add,
    remove,
    find
};

function findById(id) {
    return db('monkeyIsland')
        .where({ id })
        .first();
}

async function add(char) {
    const id = await db('monkeyIsland').insert(char);

    return id;
}

function remove(id) {
    return db('monkeyIsland')
        .where({ id })
        .del();
}

function find() {
    return db('monkeyIsland');
}