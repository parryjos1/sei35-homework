console.log("HELLO VUEeeeee FLKKKKR!!");




created: function() {
  console.log('Loaded');
  $.getJSON('// https://www.flickr.com/services/rest?method=flickr.photos.search&text=coral+ocean&api_key=2f5ac274ecfac5a455f38745704ad084&format=json&nojsoncallback=1').

  .done(data => this.dogs = data).
  fail(console.warn);

  {

const BASE_URL = 'https://www.flickr.com/services/rest/';
const API_KEY = '2f5ac274ecfac5a455f38745704ad084';
console.log(BASE_URL);


const showScrollTop = function () {
  const scrollTop = $( window ).scrollTop();
  console.log( "Scroll Top is: ", scrollTop );
}
const throttledShowScrollTop = _.throttle( showScrollTop, 100 );
$( window ).scroll( throttledShowScrollTop );
