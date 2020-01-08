Movies I
##Specification Build a search form that lets the user enter a movie name. The Sinatra app will use HTTParty to fetch the data for the chosen movie from OMDB and display it on the page. Display the poster, as a bare minimum.

##Bonus I Modify your existing code to allow searches for multiple matches. For example, a search for "Alien" should return a list of clickable links (each of which would then take you to the full results page for the selected movie):

Alien
Aliens
Alien 3
Alien Resurrection
My Stepmother Is An Alien
etc
The OMDB site documents the parameter you need to use to search for multiple matches.

##Bonus II Update your code from bonus I so that if only one movie matches your search you are forwarded directly to that movie's result page.


The homework is: replicate the Stock Search site, but for Movie Search

This means

1. A route which displays a blank form where the user can enter a search term; which submits to...

2. A route which uses the submitted search term to search themoviedb.org and output the results into the template, one result per line (probably use <ul> and <li>) - at least the title, maybe the year too

3. Optionally: also show a movie poster thumbnail for each result (you will have to do your own research to work out how to construct the full URL for a poster image; you're not the first person to attempt this)

4. Optionally: if you're feeling very brave, make each search result a link, which uses the movie ID returned in the results to go to another route on your sinatra site (like /movie/234235) - the route block can use the ID in the route URL (via params) to make another request to themoviedb.org, this time to a different endpoint to get the extended movie details (including budget etc - RTFM to find out the URL), and show these details in a template (I did say if you were feeling brave)
