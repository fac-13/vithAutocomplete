(function () {
	document.querySelector('.form__input').focus(); // gives immediate focus to the form
	var domList = document.querySelector('#js-result');
	// var input = document.querySelector('#js-input');
	var url = '/search/?q='; // function scoped variable for the search string

	// ADD LISTENER TO COMBINE IT ALL TOGETHER
	request.addListener('#js-submit', 'keyup', function (event) {
		event.preventDefault();
		//STETCH: if statement to handle highlight deletion
		// Creates our Search String
		var input = event.key;
		if (event.keyCode >= 48 && event.keyCode <= 90) { // Do we care about punctuation and add more key codes ie space bar? (stretch!!!)
			url = url += input;
			request.fetch(url, displaySuggestions);

		} else if (event.keyCode === 8) {
			url = url.substring(0, url.length - 1);
			request.fetch(url, displaySuggestions);

		}
	});

	// FUNCTION FOR DOM MANIPULATION ONCE RECEIVED REQUEST
	function displaySuggestions(response) {
		while (domList.firstChild) {
			domList.removeChild(domList.firstChild); // refreshes tracklist for repeadted searches
		  }
		response.forEach(function (item) {
			var domItem = document.createElement("li");
			domItem.classList.add("result__item");

			var title = document.createElement("span");
			title.classList.add("result__text");
			title.textContent = item;
			domItem.appendChild(title);

			domList.appendChild(domItem);
		});
	};

	document.querySelector('.form').reset(); // resets search form input field
})();