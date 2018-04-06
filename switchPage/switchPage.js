function switchPage(newPage) {	// Reverse proxy-safe page switching
	let url = String(window.location.href);
	let temp = null;

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
}
