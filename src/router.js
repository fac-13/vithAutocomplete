// THIS IS THE MAIL ROOM
const logic = require('./logic');
const handlers = require('./handlers');

const router = (request, response) => {
    console.log("router req:", request);
    const url = request.url;

    if (url === '/') {
        handlers.staticHandler(response, 'public/index.html');

    } else if (url.indexOf('search') !== -1) {
        console.log("router reached")
        handlers.searchHandler(response, url);

    } else if (url.indexOf('public') !== -1) {
        handlers.staticHandler(response, url);

    } else {
        response.writeHead(404, { 'content-type': 'text/plain' });
        response.end('404 error');
    }
}

module.exports = router;