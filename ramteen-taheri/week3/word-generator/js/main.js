const wordGenerator = {
    wordArray: [],
    loadWordArray: function() {
        let hiddenWords = $('#hiddenWords')[0].innerText;
        this.wordArray = hiddenWords.split(' ');
    },
    printRandomWord: function() {
        let randomIndex = Math.random() * (this.wordArray.length);
        randomIndex = randomIndex.toFixed(0);
        let randomWord = this.wordArray[randomIndex];
        randomWord = randomWord.trim();
        const horizontal = Math.random() * (100);
        const vertical = Math.random() * (100);
        $('#chosenWord').css("left", `${horizontal}vw`).css("top",`${vertical}vh`);
        $('#chosenWord').text(randomWord);
        if(randomWord == '') {
            this.printRandomWord();
        }
    }
};


wordGenerator.loadWordArray();
setTimeout(function() { 
    setInterval(function(){ wordGenerator.printRandomWord(); }, 100);
}, 2000)

