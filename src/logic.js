const dummy = require('./animalsDummy.json');

// PURE LOGICS FOR PROCESSING

const logic = {
	searchSuggestions: input => {
        let regex = new RegExp(`\\b${input}`, 'g');
        console.log(regex);
		let result = dummy
			.map(element => element['common name'])
            .filter(name => regex.test(name))
            .slice(0, 5)
            .sort((a, b) => a > b); /// this isn't working needs to be sorted.  Last test is failing
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
