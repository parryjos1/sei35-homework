// Step by Step:

// Create an array of every link on the page using document.querySelectorAll(cssSelector)

// Iterate through the array. In each iteration of the loop:

// Find the current href using element.getAttribute(name), and store into a variable

// Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl)

// Create an IMG element using document.createElement(tagName)

// Set the "src" of the IMG element using element.setAttribute(name, value)

// Append the IMG to the link using element.appendChild(element)

// const links= document.querySelectorAll('a');
// console.log(links);

// for links = ["80s", "otters", "Cat",]
// element.getAttribute(links)
// function( info ){
//   element.getAttribute(links)
//   console.log();
// }
// $('.links[href]').each(function(){});
// var linkArray = new Array();
//     $('.links').each(function(){
//       var dataLayer = $(this).data('href');
//       if(!dataArray.indexOf(dataLayer))
//       {
//          dataArray.push(dataLayer);
//          $('.popupDiv[data-layer="'+ dataLayer +'"]').each(function(){
//          });
//       }
//     });


// const links = document.querySelectorAll('a');
// console.log(links);
//
// for (var i = 0; i < links.length; i++){
//   const url = links[i].href;
//   console.log(links);
// };

const links = document.querySelectorAll( 'a' );

for (var i = 0; i < links.length; i++) {
  const currentLink = links[i]
  //Find the current href using element.href (assuming your variable is called element)
  const linkURL = currentLink.href;

  //generate a thumnail URL using youtube.generateThumbnailUrl(videoUrl)
  const thumbnailURL = youtube.generateThumbnailUrl( linkURL );
  console.log( thumbnailURL );
  //create an IMG element using document.createElements(tagName)
  const img = document.createElement( 'img' );

  //Set the "src" of the img element using newImage.src = 'something'
  img.src = thumbnailURL;

  const breakTag = document.createElement( 'br' )
  currentLink.appendChild( breakTag )
  //append the IMG to the link using element.appendChild(element)

  currentLink.appendChild( img );

}
