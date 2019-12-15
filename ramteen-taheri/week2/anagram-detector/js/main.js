const anagramDetector = {
    wordArray: [
        "enlists",
        "google",
        "inlets",
        "banana"
    ],
    anagrams: [],
    sortString: function(str) {
        var arr = str.split('');
        var sorted = arr.sort();
        return sorted.join('');
    },
    findMatch: function(str) {
        for(let x = 0; x < anagramDetector.wordArray.length; x++) {
            let temp = anagramDetector.sortString(anagramDetector.wordArray[x].toLowerCase());
            let temp2 = anagramDetector.sortString(str.toLowerCase());
            if(temp === temp2) {
                anagramDetector.anagrams.push(anagramDetector.wordArray[x]);
            }
        }
    }
};

const input = "listenn";
anagramDetector.findMatch(input);



if(Array.isArray(anagramDetector.anagrams) && anagramDetector.anagrams.length === 0) {
    console.log("No anagrams found");
} else {
    console.log('Anagrams Suggested: ');
    for(let x = 0; x < anagramDetector.anagrams.length; x++) {
        console.log(anagramDetector.anagrams[x]);
    }
}
