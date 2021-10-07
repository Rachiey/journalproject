const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../html/mainPage.html'), 'utf8');

describe('mainPage.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    });

    describe('head', () => {
        test('it has a title', () => {
            const head = document.querySelector('title');
            expect(head).toBeTruthy();
            expect(head.textContent).toContain('Journal Website - Home');
        });

        test('css links to a .css file', () => {
            let css = document.querySelector('link[rel="stylesheet"]');
            let link = css.getAttribute("href");
            let result = /.css$/i.test(link)
            expect(result).toBeTruthy()
        });

        test('script tag is present', () => {
            let javascriptLink = document.querySelector('script');
            expect(javascriptLink).toBeTruthy()
        });

        test('script has a src attribute', () => {
            let javascriptLink = document.querySelector('script');
            let src = javascriptLink.getAttribute("src");
            expect(src).toBeTruthy();
        });

        test('the page has a favicon element', () => {
            let iconLink = document.querySelector('link[rel="icon"]');
            expect(iconLink).toBeTruthy()
        });

        test('the favicon link is present', () => {
            let iconLink = document.querySelector('link[rel="icon"]');
            expect(iconLink.getAttribute("href")).not.toEqual('#') 
        });
    })

    describe('body', () => {
        test('header exists', () => {
            expect(document.querySelector('header')).toBeTruthy();
        });

        test('it has a title', () => {
            let title = document.querySelector('h1');
            expect(title.textContent).toContain('TravelShare');
        })

        test('it has a navbar', () => {
            let navbar = document.querySelector('.topnav');
            expect(navbar).toBeTruthy;
        })

        test('it has a category selector', () => {
            let categorySelector = document.querySelector('select');
            expect(categorySelector).toBeTruthy;
        })

        test('it has a text area for the post title', () => {
            let postTitle = document.querySelector('#title');
            expect(postTitle).toBeTruthy;
        })

        test('it has a text area for the location', () => {
            let location = document.querySelector('#location');
            expect(location).toBeTruthy;
        })

        test('it has a text area for the post message', () => {
            let postMessage = document.querySelector('#comments');
            expect(postMessage).toBeTruthy;
        })

        test('it has submit post button', () => {
            let submitPostButton = document.querySelector('#journalsubmit');
            expect(submitPostButton).toBeTruthy();
        })
    })
});
