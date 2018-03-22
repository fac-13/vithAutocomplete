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

	searchQuery: query => {
		let result = [ {
			"ID": 11300004,
			"Order": "tubulidentata",
			"Suborder": null,
			"Infraorder": null,
			"Superfamily": null,
			"Family": "orycteropodidae",
			"Subfamily": null,
			"Tribe": null,
			"Genus": "orycteropus",
			"Subgenus": null,
			"Species": "afer",
			"Subspecies": null,
			"TaxonLevel": "species",
			"Extinct?": false,
			"OriginalName": null,
			"ValidName": "yes",
			"Author": "pallas",
			"Date": "1766",
			"ActualDate": null,
			"TypeSpecies": null,
			"CommonName": "aardvark",
			"Distribution": "savannah zones of west africa to e sudan, ethiopia and eritrea; kenya; somalia; n and w uganda to tanzania; rwanda; n, e, and c dem. rep. congo; w angola; namibia; botswana; zimbabwe; zambia; mozambique; south africa.",
			"Status": "iucn � least concern.",
			"File": 13,
			"SortOrder": "13-00004",
			"DisplayOrder": "13-0001-0000-0000-0000-0002-0000-0000-0003-0000-0004"
		  }];
		  return result;
		// take in a query (string) and return one matching result (object)
	}
};

module.exports = logic;
