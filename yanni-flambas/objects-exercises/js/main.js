//Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

const books = [
  {title:'Harry Potter 1', author: 'Rowling', alreadyRead:false},
  {title:'Harry Potter 2', author: 'Rowling', alreadyRead:false},
  {title:'Harry Potter 3', author: 'Rowling', alreadyRead:false},
  {title:'Harry Potter 4', author: 'Rowling', alreadyRead:false},
  {title:'Harry Potter 5', author: 'Rowling', alreadyRead:false},
  {title:'Harry Potter 6', author: 'Rowling', alreadyRead:false},
  {title:'Harry Potter 7', author: 'Rowling', alreadyRead:false},
  {title:'Harry Potter 7.5', author: 'Rowling', alreadyRead:false},
  {title:'Circe', author:'Jane Doe', alreadyRead:false},
  {title:'Blood Red Road', author:'John Doe', alreadyRead:false},
];
  for( let i = 0; i < books.length; i++){
    const book = books[ i ];
    if( book.alreadyRead = true) {
      console.log(`You have already read ${book.title} written by ${book.author}`);
    };
  };


//
// for( let i = 0; i < books.length; i++ ){const book = books[ i ]; if( book.alreadyRead ){ console.log (`You have already read ${books.title} written by ${books.author}`);
//   } else {
//       console.log(`You have not read ${books.title} written by ${books.author}`);
//   }
// }
//
//
//

const recipe = {
  title: 'butterscotch',
  servings: 2,
  ingredients: ['butter', 'scotch']
};

console.log(`title: ${recipe.title}`);
console.log(`Servings: ${recipe.servings}`);
console.log('Ingredients:');

console.log( recipe.ingredients.join("\n"));







// for( let i = 0; i < booksToRead.length; i++){
//   const booksToRead1 = booksToRead [ i ];
//
//   if( booksToRead.alreadyRead ){
//
//   } else {
//
//   }
//
//   console.log(`${ booksToRead.title } by ${ booksToRead.author }`);
// }



  // console.log(`book:booksToRead[i]);
// for( const alreadyRead in booksToRead) {
// 	console.log('title', booksToRead);
// 	console.log( 'author:', booksToRead [ dumbName] );
// 	console.log(‘—————————‘);
// }
// const booksRead = [
//
// ]


const favouriteMovie = {
  title: 'Inherent Vice',
  duration: 140,
  stars: ['Joaquim Phoenix', 'Josh Brolin', 'Reese Witherspoon']
};

console.log(`${favouriteMovie.title} lasts for ${favouriteMovie.duration} minutes. Stars:
  ${favouriteMovie.stars.join(', ')}`);
