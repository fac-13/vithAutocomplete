(function () {
	document.querySelector('.form__input').focus(); // gives immediate focus to the form
	var domList = document.querySelector('#js-result');
	var domInput = document.querySelector('#js-input');
	var autocompleteURL = '/suggest/?q='; // function scoped variable for the search string
	var searchQueryURL = '/search/?q='; // endpoint to request search results
	var inputString = '';
	var resultScnTitle = document.querySelector('#js-resTitle');
	var resultScnList = document.querySelector('#js-resList');

	displayReset();
	// ADD LISTENER TO COMBINE IT ALL TOGETHER
	request.addListener('#js-submit', 'keyup', function (event) {
		event.preventDefault();
		displayReset();
		inputString = domInput.value.trim();
		//STETCH: if statement to handle highlight deletion
		// Creates our Search String
		if (inputString === '') {
			removeChildren();
		}
		if (event.keyCode >= 48 && event.keyCode <= 90 || event.keyCode === 32) {
			// Do we care about punctuation and add more key codes ie space bar? (stretch!!!)
			if (inputString !== '') {
				request.fetch(autocompleteURL + inputString, displaySuggestions);
			}

		} else if (event.keyCode === 8 && inputString !== '') {
			// on backspace
			request.fetch(autocompleteURL + inputString, displaySuggestions);
		} else if (event.keyCode === 13) { //"ENTER"
			inputString = domInput.value;
			request.fetch(searchQueryURL + inputString, displayResults);
		}
	});

	// add listener to the form for dropdown content menu
	domList.addEventListener('click', function (event) {
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
		resultScnTitle.textContent = response[0].CommonName;
		// replace keys with resultKeys if want everything
		var keys = ['Order', 'Suborder', 'Infraorder', 'Superfamily', 'Family', 'Subfamily', 'Tribe', 'Genus', 'Subgenus', 'Species', 'Subspecies'];
		keys.forEach(function (key) {
			var text = response[0][key];
			if (text) {
				var domResItem = document.createElement("li");
				domResItem.classList.add("scnresult__item");
				var resTitle = document.createElement("span");
				resTitle.textContent = key + ' - ' + response[0][key];
				domResItem.appendChild(resTitle);
				resultScnList.appendChild(domResItem);
			}

		});
	};

	// after results have been displayed; reset stuff;
	function displayReset() {
		removeChildren();
		resultScnTitle.textContent = '';
		while (resultScnList.firstChild) {
			resultScnList.removeChild(resultScnList.firstChild); // refreshes tracklist for repeadted searches
		};
	}

	// once click on the list, will update input
	function replaceInput(event) {
		domInput.value = event.target.firstChild.textContent;
		removeChildren();
	}

	document.querySelector('.form').reset(); // resets search form input field
})();