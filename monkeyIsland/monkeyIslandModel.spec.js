const request = require('supertest');

const db = require('../data/dbConfig.js');
const Chars = require('./monkeyIslandModel.js')

describe('monkeyIslandModel', () => {
    describe('add()', () => {
        afterEach(async () => {
            await db('monkeyIsland').truncate();
        })

        it('should add the character to the db', async () => {
            let char = await Chars.add({ name: 'Voodoo Lady'});
            expect(char.name).toBe('Voodoo Lady');
        });

        it('should add characters to the db', async () => {
            await Chars.add({ name: 'Herman Toothrot'});
            await Chars.add({ name: 'Meathook'});
            await Chars.add({ name: 'Stan S. Stanman'});

            const chars = await db('monkeyIsland');
            expect(chars).toHaveLength(3);
        });
    });
});