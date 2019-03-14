const db = require('../data/dbConfig.js');

module.exports = {
    findById,
    add,
    remove
};

function findById(id) {
    return db('monkeyIsland')
        .where({ id })
        .first();
}

async function add(hub) {
    const [id] = await db('hubs').insert(hub);

    return findById(id);
}

function remove(id) {
    return db('monkeyIsland')
        .where({ id })
        .del();
}