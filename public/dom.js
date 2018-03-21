(function() {
 
  document.querySelector(".form__input").focus(); // gives immediate focus to the form

  // ADD LISTENER TO COMBINE IT ALL TOGETHER
  request.addListener("#js-submit", "keyup", function(event) {
    event.preventDefault();

    // user input to adjust the URL for search query
    var input = event.target[0].value; 

    // this will send each letter to server to get the response
    // url = /search/ + input string (to match the endpoint)
    request.fetch(url, displaySuggestions); 
  });
  
  // FUNCTION FOR DOM MANIPULATION ONCE RECEIVED REQUEST
  function displaySuggestions(){

  }

    document.querySelector(".form").reset(); // resets search form input field
  }
})();
