

const sayHello = function() {

  console.log("hello fromm inside sayHello()!");
};

const runNicely = function (functionToRun) {

  console.log('Hi! I am excited to run your function for you! hahahahahahahahahahaha');
  functionToRun(); // run the given argument
  console.log('It was so rewarding to run your function! I hope to do it again soon!');

}
//runNicely(sayHello)

window.onload = sayHello

const arr = ['one', 'two', 'three', 'four']

const each = function(arrayToLoopOver, functionToRun) {
   for (var i = 0; i < arrayToLoopOver.length; i++) {
     functionToRun(arrayToLoopOver[i], i)
     // const currentElem = arrayToLoopOver[i]
     // functionToRun(currentElem);
   }
};

each(arr, function(item, index){
  if (index % 2 === 0){
  console.log(index, item);
}
})


arr.forEach(function(elem){
  console.log(elem);
})
