(function () {
	document.querySelector('.form__input').focus(); // gives immediate focus to the form
	var domList = document.querySelector('#js-result');
	var domInput = document.querySelector('#js-input');
	var autocompleteURL = '/suggest/?q='; // function scoped variable for the search string
	var searchQueryURL = '/search/?q='; // endpoint to request search results
	var inputString = '';

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
				request.fetch(autocompleteURL + inputString, displaySuggestions);
			}

		} else if (event.keyCode === 8 && inputString !== '') {
			console.log(event.keyCode)
			// on backspace
			request.fetch(autocompleteURL + inputString, displaySuggestions);
		} else if (event.keyCode === 13) { //"ENTER"
			inputString = domInput.value;
			request.fetch(searchQueryURL + inputString, displayResults);	
		}
	});

	// add listener to the form for dropdown content menu
	domList.addEventListener('click', function(event) {
		request.fetch(searchQueryURL + event.target.firstChild.textContent, displayResults);
		replaceInput(event);
	}) 

	request.addListener('#js-submit', 'keydown', function (event) {
		if (event.keyCode === 13) { //"ENTER"
			event.preventDefault();
		}
	})


	// DOM MANIPULATION FUNCTIONS
	// Remove list
	function removeChildren() {
		while (domList.firstChild) {
			domList.removeChild(domList.firstChild); // refreshes tracklist for repeadted searches
		}
	}
	// Function to display autocomplete suggestions
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

	// Function to display result query
	function displayResults(response) {
		console.log(response);
	};

	// once click on the list, will update input
	function replaceInput(event) {
		domInput.value = event.target.firstChild.textContent;
		removeChildren();
	}

	document.querySelector('.form').reset(); // resets search form input field
})();