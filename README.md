# SEI-35 Homework

[General Assembly, Sydney](https://generalassemb.ly/)

### Homework Repository
1. Repository Setup
2. Do Your Homework
3. Submit Your Homework

#### Repository Setup
You only need to do this once, not every time you're submitting homework!!

- **Fork this repository**
  - 'Forking' creates a personal, 'forked' copy of this repository on your Github account
  - Hit the Fork button in the top right-hand corner of this page
- **Clone your forked repository to your computer**
  - 'Cloning' takes your 'forked' repository on GitHub and creates a local copy - or 'clone' - on your computer
  - Make sure your browser is open to your forked version of this repository on Github (eg http://github.com/{{YOUR_USERNAME}}/sei35-homework)
  - Hit the Clone or Download button in the top right-hand corner of the page and copy the URL to your clipboard
  - Open your computer's terminal to the directory in which you intend to store your homework
  - ```git clone url_of_your_fork_on_github``` (where url_of_your_fork_on_github is the URL you copied after hitting 'Clone or Download', above)
- **Add an upstream remote repository**
  - Adding an upstream repository links the local repository on your computer to the original repository on Github (i.e. mine, the one from which you created the fork)
 - ```cd sei35-homework```
 - ```git remote add upstream https://github.com/parryjos1/sei35-homework.git```
- ```git pull upstream master```

#### Do your Homework
You should put each night's homework in a new folder within the appropriate directory (directory/folder of your name) inside your homework repo. So, for a day, where you have two tasks ("Calculator" and "Strings"), you might do something like this:

1. Open Terminal/iTerm2;
2. Go to your local homework repo (eg, cd ~/sei/homework): ```cd sei35-homework```
3. From here, go to the folder matching your name within that repo, and the appropriate week (eg, taylor_swift/week_01): ``` cd taylor_swift```
4. Create new folders for each week: ```mkdir week01``` and then ```cd week01``` for each day of the day's homework tasks: ```mkdir calculators``` and then ```cd calculators``` and again ```mkdir strings``` and then ```cd strings```.
5. Create the files (follow gitbook for steps) necessary to complete the homework in their respective directories
6. Get to it!

#### Submit Your Homework
You need to do this every time you're submitting homework.

- **Commit your work to your local repository progressively**
  - Make sure you are the correct folder containing the homework you want to submit.
  - ```git add .```
  - ```git commit -m "YOUR_COMMIT_MESSAGE_GOES_HERE"``` (where YOUR_COMMIT_MESSAGE_GOES_HERE is your description of the work you are committing)
- ##### Push your changes to your forked repository
  - ```git pull --rebase upstream master``` rebase with changes that have been made to this repository into your own local repository.
  - ```git push origin master```
- ##### Once you're finished, submit a pull request for me to accept your homework
  - Navigate to your forked version of this repository on Github (eg https://github.com/{{YOUR_USERNAME_HERE}}/sei35-homework).
  - Click the Pull request button.
  - Make sure the destination for the pull request is set to my repository, not your own or anyone else's.
  - IMPORTANT: In the pull request comment, tell me the following:
     -  How difficult did you find this (out of 10)? 0 being no problems at all, 10 being impossible
     - Was there anything that you struggled with?
     - Is there any particular code you want us to look into?
     - Is there anything that you'd like some further information on?
     - Roughly how long did it take?

**If you don't mention anything in the Pull Request comments, we will assume you had no problems at all with it, and you will receive no feedback about your homework.**

If you want to follow up on any issues you had with the homework, the ideal time for that will be during the more unstructured lab time after lunch - come and see Joel or myself then and we can go over any outstanding questions.

**Note:** if I haven't yet merged your Pull Request into my master homework repo before it's time to submit the next day's homework, you won't be able to create a new Pull Request. That's okay - for the new homework just add a new comment to the open (existing) Pull Request, featuring the same four points given above to describe your response to it.
