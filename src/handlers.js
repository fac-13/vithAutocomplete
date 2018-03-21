// KITCHEN FOR ORDERS

const fs = require('fs');
const path = require('path');
const data = require('./animals.json');
const logic = require('./logic');

const staticHandler = (res, filepath) => {
    const extension = filepath.split('.')[1];
    const extensionType = {
        html: 'text/html',
        css: 'text/css',
        js: 'application/javascript',
        ico: 'image/x-icon',
    };

    fs.readFile(path.join(__dirname, '..', filepath), 'utf8', (err, file) => {
        /* istanbul ignore if */
        if (err) {
            res.writeHead(500, {'content-type': 'text/plain'});
            res.end('server error');
        } else {
            res.writeHead(200, {'content-type': extensionType[extension]});
            res.end(file);
        }
    });
}

const searchHandler = (res, url) => {
    // endpoint for /search/ + input string -- so need to get input string from URL
    // SO IN HERE:
    // takes in pure functions from logic and linking it with input string
    // something like logic.process(input);
    // put the response into result
    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify(result));
}

module.exports = {
    staticHandler,
    searchHandler
};