console.log("hello");

// Track how many times each student in the class has clapped this week (just make up the numbers);
// Include a collection of candidates for the Friday draw (ie, a list of names of people who have clapped Badger more than twice that week);
// Pick a random student to deliver the solution to Friday's warmup.
// If no one has clapped enough that week, the program should indicate that Badger has to do his own damned warmup.

const revengeOfBadger = {
  students: {
    chris: 3,
    scott: 0,
    ana: 1,
    aleks: 4,
    adony: 3,
  },
  shortlist: [],
  generateShortlist: function(){

    for( const key in this.students){
      const numClaps = this.students[key];
      if(numClaps > 2){
        this.shortlist.push(key);
      }
    }

  }, // generateShortlist()
  drawWinner: function(){

    this.shortlist = [];
    this.generateShortlist();
    // console.log(this.shortlist);

    if( this.shortlist.length > 0){
      const randomIndex = Math.floor(Math.random() * this.shortlist.length);
      return this.shortlist[randomIndex];
    } else {
      return "badger";
    }

  }
} // revengeOfBadger

// revengeOfBadger.generateShortlist();
// console.log(revengeOfBadger.shortlist);

console.log(revengeOfBadger.drawWinner());
console.log(revengeOfBadger.drawWinner());
console.log(revengeOfBadger.drawWinner());




