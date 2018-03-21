(function() {
	document.querySelector('.form__input').focus(); // gives immediate focus to the form
	var url = '/search/?q='; // function scoped variable for the search string

	// ADD LISTENER TO COMBINE IT ALL TOGETHER
	request.addListener('#js-submit', 'keyup', function(event) {
		event.preventDefault();
		console.log(event);

		//STETCH: if statement to handle highlight deletion
		// Creates our Search String
		var input = event.key;
    if (event.keyCode >= 48 && event.keyCode <= 90) { // Do we care about punctuation and add more key codes ie space bar? (stretch!!!)
			url = url += input;
			console.log(url);
		} else if (event.keyCode === 8) {
			url = url.substring(0, url.length - 1);
			console.log(url);
		}
		request.fetch(url, displaySuggestions);
	});

	// FUNCTION FOR DOM MANIPULATION ONCE RECEIVED REQUEST
	function displaySuggestions() { }

	document.querySelector('.form').reset(); // resets search form input field
})();
