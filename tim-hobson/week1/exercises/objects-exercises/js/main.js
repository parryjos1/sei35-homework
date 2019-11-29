// Exercises: Objects
// The Reading List
// Keep track of which books you read and which books you want to read!
// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

let books = [

  { title: 'Things My Dog Said', author: 'Dave Smith', alreadyRead: false },
  { title: 'Where I Left My Pants', author: 'Jane Howard', alreadyRead: true },
  { title: `What's That Smell?`, author: 'Randy Toots', alreadyRead: true },
  { title: 'Where Did I Go From?', author: 'George Ho', alreadyRead: false },
  { title: 'The Bible', author: 'Various Authors', alreadyRead: false },

];


for ( let i = 0; i < books.length; i++) {
    const book = books[ i ];
    alreadyOrStill = ""
      // if (book.alreadyRead === true) {
      if( book.alreadyRead ) { // as every statement is already 'true' this works too.
        // alreadyOrStill = "You already read "
        console.log( `You have already read ${book.title}" by ${book.author}` );
      } else {
        // alreadyOrStill = "You still need to read "
        console.log( `You still need to read ${book.title}" by ${book.author}` );

      }
    // console.log( `${alreadyOrStill}"${book.title}" by ${book.author}` );
};



// The Recipe Card\
// Never forget another recipe!
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
//
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

let recipe = {
  title: 'Mole',
  servings: 2,
  ingredients: [ 'cinnamon', 'cumin', 'cocoa' ]
}

console.log(recipe.title);
console.log("servings: "+ recipe.servings )
console.log("ingredients:");
console.log( recipe.ingredients.join("\n"));


//this types out the list of keys: title, servings, ingredients
for( const key in recipe ) {
  console.log(key);
}

// for ( let i = 0; i < recipe.ingredients.length; i++) {
  //
  //   // console.log( recipe.ingredients[ i ] );
  //
  // }
// console.log(recipe.ingredients[0]);
// console.log(recipe.ingredients[1]);
// console.log(recipe.ingredients[2]);




// The Movie Database
// It's like IMDB, but much much smaller!
// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
// Maybe the join method will be helpful here


const favouriteMovie = {
  title: 'Inherit Vice',
  duration: 140,
  stars: [ 'Joaquim Phoenix', 'Josh Brolin', 'Reese Witherspoon' ]
};

console.log(`${favouriteMovie.title} lasts for ${favouriteMovie.duration} minutes. Stars: ${favouriteMovie.stars.join(', ')}`);
