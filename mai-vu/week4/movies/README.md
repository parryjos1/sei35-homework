# Movies

### Specification

Build a search form that lets the user enter a movie name. The Sinatra app will use HTTParty to fetch the data for the chosen movie from OMDB and display it on the page. Display the poster, as a bare minimum.

### Bonus I

Modify your existing code to allow searches for multiple matches. For example, a search for "Alien" should return a list of clickable links (each of which would then take you to the full results page for the selected movie):

1. Alien
1. Aliens
1. Alien 3
1. Alien Resurrection
1. My Stepmother Is An Alien
1. etc

The OMDB site documents the parameter you need to use to search for multiple matches.

### Bonus II

Update your code from Bonus I so that, if only one movie matches your search you are forwarded directly to that movie's result page.

### Additional Resources

* [Dynamic URLs in Sinatra](http://blog.teamtreehouse.com/ruby-sinatra-dynamic-urls-tutorial)
* [Open movie database API](http://www.omdbapi.com/)
* [HTTParty Tutorial](http://blog.teamtreehouse.com/its-time-to-httparty)