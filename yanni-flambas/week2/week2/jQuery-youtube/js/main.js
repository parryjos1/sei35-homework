// console.log('HELLO?');
//
// var $allLinks = $("a");
//
// console.log( $allLinks );
//
// $allLinks.each(function(){
//   const href = $(this).attr('href');
//   console.log( href );
// });
//
//
// // $("body").prepend($allLinks);
//
//
//
// // Create an array of every link on the page using document.querySelectorAll(cssSelector)
// // Iterate through the array. In each iteration of the loop:
// // Find the current href using element.getAttribute(name), and store into a variable
// // Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl)
// // Create an IMG element using document.createElement(tagName)
// // Set the "src" of the IMG element using element.setAttribute(name, value)
// // Append the IMG to the link using element.appendChild(element)
// console.log('Hello');
//
// const urlList = $('a');
//
// for (var i = 0; i < urlList.length; i++) {
//   //Find the href
//    urlList[i] $('href')
//   //generate a generateThumbnailUrl
//
//   //create an IMG element
//
//   //Set the "src" of the IMG element
//
//   //Append the IMG to the link
// // };
// $('a').each(function () {
//   const link = $(this).attr('href');
//   const thumbnail = youtube.generateThumbnailUrl( link );
//   const $img = $('<img>');
//   $img.attr('src', thumbnail);
//   $(this).append( $img );

// $('a').each(function () {
//   const link = $(this).attr('href');
//   const thumbnail = youtube.generateThumbnailUrl( 'https://www.youtube.com/watch?v=TddFnTB_7IM' );
//   const $img = $('<img>');
//   $img.attr('src', thumbnail);
//   $(this).append( $img );
// });

// in a function
//Find the Href, Generatethumbnail, create an img elements, set the src of the img element, append the img to the link.
$('a').each(function() {
  const link = $(this).attr('href');
  const thumbnail = youtube.generateThumbnailUrl( 'https://www.youtube.com/watch?v=TddFnTB_7IM' );
  const $img = $('<img>');
  $img.attr  source
  $(this).append( $img )
})
