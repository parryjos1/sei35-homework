//setting html of paragraph
$('#jq-paragraph').html("<div>test</div>");


//grabbing image
const img = $('img');

//setting image
img.attr('src', 'http://www.fillmurray.com/400/400');


//getting image and paragraph info
console.log(img[0].src);
console.log($('#jq-paragraph').html());


//practice looping
$('span').each(function() {
    console.log($(this).html());
});

const $span = $('span');

//return a specific element of multi jquery results
console.log($span.eq(0));