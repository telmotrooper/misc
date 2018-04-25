# switchPage
JavaScript function to allow the usage of relative links in a reverse proxied application

Example usage:
* Redirecting to page "/login" if you're in your application's home directory:
	
		window.location = switchPage("login", "home");
* Redirecting to page "/login" if you're **not** in your application's home directory:

		window.location = switchPage("login", "page");
