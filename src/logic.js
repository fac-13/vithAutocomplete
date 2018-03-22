const dummy = require('./animalsDummy.json')

// PURE LOGICS FOR PROCESSING

const logic = {
    searchSuggestions: (input) => {        
        let result = dummy.map(element => element['common name']).slice(0, 5);     
        return result;
         // should take a string of any length, and check the matching objects from animals.json
    // and return an array of 5 strings
    },
    
    searchResult: (query) => {
        // take in a query (string) and return one matching result (object)
    }
}

module.exports = logic;