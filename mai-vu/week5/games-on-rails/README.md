Games on Rails is a web application with three games:

* Magic 8 Ball
* Secret Number
* Rock Paper Scissors


__Magic 8 Ball__

* Magic 8 ball takes user's questions from the the URL as params and returns a positive or negative answer.

__Secret Number__

* Users click a number between 1 and 10 (or type a number into a form input). The controller tells the user whether they guessed correctly.

__Rock Paper Scissors__

* Create a route that goes from ```/games/rock_paper_scissors/:throw``` to ```rps#play```
* Use params[:throw] as a user's choice
* Compare the two. If the user's throw matches the app's throw, the user wins.
<br>
i.e. If a user throws rock ```http://localhost:3000/games/rock_paper_scissors/rock``` and the server picks rock then the player wins! (Yes,  I know that is not how RPS works)
* Bonus: Set the win or lose condition based on the real rules of [Rock Paper Scissors](http://en.wikipedia.org/wiki/Rock-paper-scissors).