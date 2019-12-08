console.log('connected');

const revengeOfBadger = {
    students: {
        chris: 4,
        scott: 5,
        lily: 0,
        anna: 1,
        donny: 3
    },
    shortlist: [],
    generateShortlist: function() {
        for(const key in this.students) {
            const numClaps = this.students[key];

            if(numClaps > 2) {
                this.shortlist.push(key);
            }
        }
    },
    drawWinner: function() {
        this.generateShortlist();

        if(this.shortlist.length > 0) {
            const randomIndex = Math.floor(Math.random() * this.shortlist.length);
            return this.shortlist[randomIndex];
        } else {
            return 'badger';
        }
    }
}

// end of revenge of badger //

console.log(revengeOfBadger.drawWinner());