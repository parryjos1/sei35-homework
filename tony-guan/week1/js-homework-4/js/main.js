
// part 1
const rectangle = {
  length: 4,
  width: 4
};

const isSquare = function( rect ){
  return rect.length === rect.width;

};

const area = function( rect ){
return length * width

};

//part 2
const isEquilater = function( tri ) {
if( tri.sideA === tri.sideB ) && ( tri.sideA == tri.sideC ) {
console.log(`The triangle is equilater.`);
treturn true;
} else {
  console.log(`The triangle is not isoceles.`);
  return false;

};


//warmup day5

const isLeapYear = function( year ) {
if ( year % 4 ===0 ){

// else if ?
  if ( year % 100 === 0 || year % 400 ===0 ) {
    return true
} else {
  return false;
}

} else {
return false;

}

 console.log(`1997: `, is LeapYear(1997));
console.log(`1996: `, is LeapYear(1996));
console.log(`1900: `, is LeapYear(1900));
console.log(`2000: `, is LeapYear(2000));

// const useInputer = promot(`Enter a year plese`);
console.log(isLeapYear( promopt(`Enter year`)));
