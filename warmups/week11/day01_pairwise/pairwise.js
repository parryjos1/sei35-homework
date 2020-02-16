const pairwise = (arr, sum) => {
  //initialise the result variable
  let result = 0;

  //looping for 1st element
  for (var i = 0; i < arr.length; i++) {

    //looping for 2nd element
    for (var j = i+1; j < arr.length; j++) {

      if(arr[i] + arr[j] === sum) {
        result += i + j; //add indexes of values found
        // console.log('i', i);
        // console.log('j', j);
        arr[i] = '';//so it's not reused
        arr[j] = '';//so it's not reused

      }
    }//loop j
  } //loop i

  return result; //the final addition of all indexes
}

console.log(pairwise([7,9,11,13,15], 20)); //6
console.log(pairwise([7,5,11,5,15], 10)); //4
console.log(pairwise([1,4,2,3,0,5], 7)); //11



//version 2//////////////////////

const pairwise2 = (arr, sum) => {

  const result = arr.reduce( (acc, cur, index) => {
    //calculate the complement number to cur
    let theOtherElement = sum - cur;

    //if we find complement number and it's not the same as cur
    if (arr.indexOf(theOtherElement) !== -1 && arr.indexOf(theOtherElement) !== index){
      // console.log('index', index);
      // console.log('index complement', arr.indexOf(theOtherElement));

      let total = index + arr.indexOf(theOtherElement);//sum their indexes

      arr.splice(index, 1, NaN); //so we don't reuse it
      arr.splice(arr.indexOf(theOtherElement), 1, NaN); //so we don't reuse it

      return acc + total;  //update the acc
    }
    // console.log('acc', acc);
    return acc;
  }, 0); //initial acc value is 0

  return result;
}

console.log(pairwise2([7,9,11,13,15], 20)); //6
