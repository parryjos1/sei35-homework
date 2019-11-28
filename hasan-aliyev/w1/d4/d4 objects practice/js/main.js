

// The Reading List
// Keep track of which books you read and which books you want to read!
//Create an array of objects,
//where each object describes a book and has properties
// for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books.
// For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
//
// Now use an if/else statement to change the output depending on whether you read it yet or not.


const books = [
    { title: "Incredibles", author: "Jason Statham", alreadyRead:false },
    { title: "Terminator", author: "Arnold Scwhatever", alreadyRead:true },
    { title: "Matrix", author: "Neo The Schoosen ONe", alreadyRead:false },
  ];
  // let iterateThrough = book[i];
  // let read = 0;
  // for (var i = 0; i < iterateThrough.length; i++) {
  //
  for (var i = 0; i < books.length; i++) {
    var book = books[i];
    var bookInfo = book.title + '" by ' + book.author;
    if (book.alreadyRead === true) {
      console.log('You already read "' + bookInfo);
    }
    else  {
      console.log('You still need to read "' + bookInfo);
    }
  }



const recipe = {
  title: 'butterscotch'
}









  //          if (wordLetters[i] === letter) {
  //               guessedLetters[i] = letter;
  //               goodGuess = true;
  //           }
  //          if (guessedLetters[i] === '_') {
  //               moreToGuess = true;
  //           }
  //       }
  //          if (goodGuess) {
  //            console.log('You found a letter!');
  //            console.log(guessedLetters.join(''));
  //          if (!moreToGuess) {
  //               console.log('You Won!');
  //           }
  //       }  else {
  //            console.log('Wrong!');
  //       }





?
