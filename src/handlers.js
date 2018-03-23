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
        svg: 'image/svg+xml'
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

const suggestHandler = (response, url) => {
    console.log("suggest handler reached");
    let inputText = url.replace('/suggest/?q=', '');
    let result = logic.suggestions(inputText);
    response.writeHead(200, {'content-type': 'application/json'});
    response.end(JSON.stringify(result));
}

const searchHandler = (response, url) => {
    console.log("search handler reached");
    // let inputText = url.replace('/search/?q=', '');
    // let result = logic.searchQuery(inputText);
    let result = logic.searchQuery(url);
    response.writeHead(200, {'content-type': 'application/json'});
    response.end(JSON.stringify(result));
}

module.exports = {
    staticHandler,
    suggestHandler,
    searchHandler
};