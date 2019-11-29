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
        return definition;
    }
};

console.log(dict.lookupWord('scope'));