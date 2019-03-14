const request = require('supertest');

// const router = require('./monkeyIslandRouter.js');
const server = require('../api/server.js');

describe('monkeyIslandRouter.js', () => {
    describe('POST /', () => {
        it('should add a character to the db', async () => {
            const res = await request(server).post('/api/monkey-island').send({ name: 'test' });

            expect(res.status).toBe(201);

            // return request(server).post('/api/monkey-island').send({ name: 'test'})
            //     .then(res => expect(res.status).toBe(201));
        });
    });
});

