$(document).ready(function () {

  const title = document.getElementById('searchMovie');




  $('#searchMovie').on('click', function(){
    // Do stuff when button is clicked

    // When user clicks button store what they entered into the textbox into a variable
    const xhr = new XMLHttpRequest();

        xhr.onload = function () {
          // console.log("Response: ", xhr.response);



          // Turn the JSON response string into an actual JS data structure
          const data = JSON.parse( xhr.response )
          console.log(`
            Title: ${ data.title }
            Overview: ${ data.overview }
            `);

            $('#output').append(`
              <p>
              <strong>${data.title}</strong>
              <br>
              ${data.overview}
              </p>
              `);

            };

            xhr.open('GET', 'https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${title}');
            xhr.send();



  }); // .on()


}); // $(document).ready()





// Basic Homework steps
// Look at Ruby Movie db & above code
// 1. Create a textbox
// 2. Create a button
// 3. When user clicks button store what they entered into the textbox into a variable
// 4. Take that variable and make a request to the moviedb api for that movie
// ^^ (Look at the code above for an example)
// 5. get the response from the request to MovieDB api and dispaly on the DOM (hint: like above we appended)
