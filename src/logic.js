const animals = require("./animals.json");
const querystring = require("querystring");

// PURE LOGICS FOR PROCESSING

const logic = {
  suggestions: input => {
    let regex = new RegExp(`\\b${input}`, "gi");
    let result = animals
      .map(element => element["CommonName"])
      .filter(name => regex.test(name))
      .slice(0, 10);
    console.log(result);
    return result;
    // should take a string of any length, and check the matching objects from animals.json
    // and return an array of 5 strings
  },

  searchQuery: query => {
    query = querystring.parse(query);
    let result = animals.filter(
      element =>
        element["CommonName"] &&
        element["CommonName"].includes(query["/search/?q"])
          ? element
          : false
    );
    return result;
    // take in a query (string) and return matching result (object)
  }
};

module.exports = logic;
