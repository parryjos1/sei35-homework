const dict = {
    // the nested object stores our actual wors and their definitions
    // as key-value paris
    // this stops them getting mixed up with the methods that also live in our main dict object

    definitions: {
        'method': 'A function which is defined inside an object (i.e. the value of a key)',
        'scope': 'the visibility or lifetime of a variable within a program',
        'variadic': 'a variadic function is one which accepts a variable number of arguments'
    },

    lookupWord: function(term) {
        const definition = this.definitions[term];
        
        if(term in this.definitions) {
            //is defined
            console.log(`${term}: ${definition}`);
        } else {
            // not defined
            console.log(`Sorry, '${term} is not defined in the dictionary'`);
        }
    },

    printAllDefinitions: function() {
        //look through all keys in the definitions object and print each
        for(const key in this.definitions) {
            this.lookupWord(key);
        }
    }
};

dict.lookupWord('scope');
dict.printAllDefinitions();