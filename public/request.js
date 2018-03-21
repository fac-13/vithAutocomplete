// -- DOM / REQUEST FUNCTIONS --

var request = {
  //   Add listener
  addListener: function(selector, eventName, callback) {
    document.querySelector(selector).addEventListener(eventName, callback);
  },

  //   Fetch requests
  fetch: function(url, callbackSelect, callbackRender) {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("load", function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        var result = callbackSelect(response);
        callbackRender(result);
      } else {
        console.log("XHR error", xhr.readyState);
      }
    });

    xhr.open("GET", url);
    xhr.send();
  },
};

if (typeof module !== "undefined") {
  module.exports = request;
}
