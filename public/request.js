// -- DOM / REQUEST FUNCTIONS --

var request = {
  //   Add listener
  addListener: function(selector, eventName, callback) {
    document.querySelector(selector).addEventListener(eventName, callback);
  },

  //   Fetch requests
  fetch: function(url, callback) {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("load", function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log("fetch is working", url)
       var response = JSON.parse(xhr.responseText);
       callback(response);
      } else {
        console.log("XHR error", xhr.readyState);
      }
    });
    xhr.open("GET", url, true);
    xhr.send();
  },
};

if (typeof module !== "undefined") {
  module.exports = request;
}
