const animals = require('./animals.json');

// PURE LOGICS FOR PROCESSING

const logic = {
	searchSuggestions: input => {
        let regex = new RegExp(`\\b${input}`, 'g');
        console.log(regex);
		let result = animals
			.map(element => element['CommonName'])
            .filter(name => regex.test(name))
            .slice(0, 5)
            console.log(result);
		return result;
		// should take a string of any length, and check the matching objects from animals.json
		// and return an array of 5 strings
	},

	searchResult: query => {
		// take in a query (string) and return one matching result (object)
	}
};

module.exports = logic;
