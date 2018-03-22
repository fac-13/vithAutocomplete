(function () {
	document.querySelector('.form__input').focus(); // gives immediate focus to the form
	var domList = document.querySelector('#js-result');
	var domInput = document.querySelector('#js-input');
	var startURL = '/search/?q='; // function scoped variable for the search string
	var height = document.getElementById('js-submit').offsetHeight;
	var inputString = '';
	console.log(height);

	// ADD LISTENER TO COMBINE IT ALL TOGETHER
	request.addListener('#js-submit', 'keyup', function (event) {
		event.preventDefault();
		inputString = domInput.value;
		//STETCH: if statement to handle highlight deletion
		// Creates our Search String
		if (inputString === '') {
			removeChildren();
		}
		if (event.keyCode >= 48 && event.keyCode <= 90) { 
			// Do we care about punctuation and add more key codes ie space bar? (stretch!!!)
			if (inputString !== '') {
				request.fetch(startURL + inputString, displaySuggestions);
			}

		} else if (event.keyCode === 8 && inputString !== '') {
			// on backspace
			request.fetch(startURL + inputString, displaySuggestions);
		}
		console.log('domInputvalie', domInput.value);
		console.log('inputString', inputString);
	});

	function removeChildren() {
		while (domList.firstChild) {
			domList.removeChild(domList.firstChild); // refreshes tracklist for repeadted searches
		}
	}
	// FUNCTION FOR DOM MANIPULATION ONCE RECEIVED REQUEST
	function displaySuggestions(response) {
		removeChildren();
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