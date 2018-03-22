const dummy = require('./animalsDummy.json');
const animals = require('./animals.json');

// PURE LOGICS FOR PROCESSING

const logic = {
	suggestions: input => {
        let regex = new RegExp(`\\b${input}`, 'g');
        console.log(regex);
		let result = animals
			.map(element => element['CommonName'])
            .filter(name => regex.test(name))
            .slice(0, 5)
            .sort((a, b) => a > b); /// this isn't working needs to be sorted.  Last test is failing
            console.log(result);
		return result;
		// should take a string of any length, and check the matching objects from animals.json
		// and return an array of 5 strings
	},

	search: query => {
		console.log(query);
		let result = animals.filter(function(element) {
			if (element['CommonName'] !== null) {
				if (element['CommonName'].includes(query)) {
					return element;
				} else {
					return false;
				}
			}
			
		}) 
		console.log(result)
		return result;
		// take in a query (string) and return matching result (object)
	}
};

module.exports = logic;
