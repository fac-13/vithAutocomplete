// KITCHEN FOR ORDERS

const fs = require('fs');
const path = require('path');
const data = require('./animals.json');
const logic = require('./logic');

const staticHandler = (response, filepath) => {
    const extension = filepath.split('.')[1];
    const extensionType = {
        html: 'text/html',
        css: 'text/css',
        js: 'application/javascript',
        ico: 'image/x-icon',
    };

    fs.readFile(path.join(__dirname, '..', filepath), 'utf8', (error, file) => {
        /* istanbul ignore if */
        if (error) {
            response.writeHead(500, {'content-type': 'text/plain'});
            response.end('server error');
        } else {
            response.writeHead(200, {'content-type': extensionType[extension]});
            response.end(file);
        }
    });
}

const searchHandler = (response, url) => {
    console.log("handler reached")
    // endpoint for /search/ + input string -- so need to get input string from URL
    // SO IN HERE:
    // takes in pure functions from logic and linking it with input string
    // something like logic.process(input);
    var result = ['cat','dog','horsse','eel']; // put the response into result
    response.writeHead(200, {'content-type': 'application/json'});
    response.end(JSON.stringify(result));
}

module.exports = {
    staticHandler,
    searchHandler
};