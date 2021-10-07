/**
 * @jest-environment jsdom
 */

const mainPage = require('../javascript/mainPage');

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../html/mainPage.html'), 'utf8');
global.fetch = require('jest-fetch-mock');

describe('mainPage.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    });

    describe('title', () => {
        test('it has a title', () => {
            const head = document.querySelector('title');
            expect(head).toBeTruthy();
            expect(head.textContent).toContain('Journal Website - Home');
        });
    });
});
