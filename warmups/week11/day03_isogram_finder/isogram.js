const isIsogram = (word) => {
  // let newWord = new Set(word.toLowerCase());
  //
  // if (newWord.size === word.length) {
  //   return true;
  // } else {
  //   return false;
  // }
  return new Set(word.toLowerCase()).size === word.length;
}


console.log(isIsogram('Dermatoglyphics')); //true
console.log(isIsogram('isogram'));  //true
console.log(isIsogram('aba')); //false
console.log(isIsogram('moOse')); //false
console.log(isIsogram('isIsogram')); //false
console.log(isIsogram('')); //true
