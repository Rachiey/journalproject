const supertest = require('supertest');
const server = require('../app');
const request = supertest(server);
const testPost = { message: 'Hello world' };

describe('testing API', () => {
    it('should return posts', async () => {
        const { status } = await request.get('/posts');
        expect(status).toBe(200);
        //expect(body.length).toBeGreaterThanOrEqual(1);
    });

    it('should return specific post', async () => {
        const { status } = await request.get('/posts/1');
        expect(status).toBe(200);
    });

    it('should return the correct page', async () => {
        const { status } = await request.get('/Entertainment');
        expect(status).toBe(200);
    });


    it('should return an out of index error for comments', async () => {
        const { status } = await request.get('/posts/comments/17459834785934875');
        expect(status).toBe(404);
    });

    it('should return an out of index error for reactions', async () => {
        const { status } = await request.get('/posts/reactions/17459834785934875');
        expect(status).toBe(404);
    });

    it('should return comments', async () => {
        const { status } = await request.get('/posts/comments/1');
        expect(status).toBe(200);
    });

    it('should return reactions', async () => {
        const { status } = await request.get('/posts/reactions/1');
        expect(status).toBe(200);
    });

    it('should create a new comment for post "1"', async () => {
        const { status } = await request
            .post('/posts/comments/1')
           // .send(testPost);
        expect(status).toBe(201);
    });

    it('should increase emoji count for post "1"', async () => {
        const { status } = await request
            .put('/posts/reactions/1')
            .send({ smile: 'smile' });
        expect(status).toBe(200);
    });
});
