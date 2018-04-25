function switchPage(newPage, mode) {	// Reverse proxy-safe page switching
	console.log("newPage: " + newPage);
	console.log("mode: " + mode);
	
	let url = String(window.location.href);
	let temp = null;

	if(newPage[0] == "/") {	// If the input starts with a "/", remove it
		newPage = newPage.substring(1, newPage.length)
	};
	
	console.log("newPage2: " + newPage);

	if(mode == "undefined" || mode == "page") {	// I'm in a page inside a directory		
		if(url.lastIndexOf("/") == url.length - 1) {	// The slash is the last character
			temp = url.substring(0, url.lastIndexOf("/"));

			if(temp[temp.lastIndexOf("/")] == temp[temp.lastIndexOf("/") - 1]) {	// Next slash is doubled
				temp = temp.concat("/");
			} else {
				temp = temp.substring(0, temp.lastIndexOf("/") + 1);
			}

		} else {	// The slash is not the last character
			temp = url.substring(0, url.lastIndexOf("/") + 1);
		}

		console.log(temp.concat(newPage));
		return temp.concat(newPage);

	} else if(mode == "home") {	// I'm in the home directory
		if(url.lastIndexOf("/") == url.length - 1) {	// The slash is the last character
			temp = url + newPage;
		} else {	// The slash is not the last character
			temp = url + "/" + newPage;
		}

		return temp;
	}
}
