const supertest = require('supertest');
const server = require('../app');
const request = supertest(server);

describe('testing API', () => {
    it('should return posts', async () => {
        const { status, body } = await request.get('/posts');
        expect(status).toBe(200);
        expect(body.length).toBeGreaterThanOrEqual(1);
    });
    it('should create a new comment for post "1628778265656"', async () => {
        const { status, body } = await request
            .post('/posts/1628778265656/comments')
            .send(testPost);
        expect(status).toBe(201);
        expect(body.message).toBe(testPost.message);
    });

    it('should increase emoji count for post "1628778265656"', async () => {
        const { status, body } = await request
            .post('/posts/1628778265656/reactions')
            .send({ like: 'like' });
        expect(status).toBe(200);
        expect(body.message).toBe('Reaction count has been updated');
    });
});
