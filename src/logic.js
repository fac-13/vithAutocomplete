const animals = require('./animals.json');
const querystring = require('querystring');

// PURE LOGICS FOR PROCESSING

const logic = {
	suggestions: input => {
		input = querystring.parse(input)['/suggest/?q'].toLowerCase().trim();
		let regex = new RegExp(`\\b${input}`, 'g');
		let result = animals
			.map(element => element['CommonName'])
            .filter(name => regex.test(name))
            .slice(0, 10)
		return result;
		// should take a string of any length, and check the matching objects from animals.json
		// and return an array of 5 strings
	},

	searchQuery: query => {
		query = querystring.parse(query)['/search/?q'].toLowerCase().trim();
		let result = animals
			.filter(element => (element['CommonName'] && element['CommonName'].includes(query)) ? element : false)
		return result;
		// take in a query (string) and return matching result (object)
	}
};

module.exports = logic;
