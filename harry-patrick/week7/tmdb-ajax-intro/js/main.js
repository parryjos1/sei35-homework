$(document).ready(function(){

  $('#getMovie').on('click', function(){

    const xhr = new XMLHttpRequest();

    xhr.onload = function () {

      const data = JSON.parse(xhr.response)
      console.log(data.results);

      let loopEachResult = function (result, functionToRun) {
        result.forEach(functionToRun);
      };

      loopEachResult(data.results, function(obj){
        $('#output').append(
        `<p class="movieTitle">
        <strong>${obj.original_title}</strong>
        <br>
        <img src="https://image.tmdb.org/t/p/w500/${obj.poster_path}" alt="movie poster">
        `);
      });

    } // AJAX onload

    xhr.open('Get', 'https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=alien');
    xhr.send();
  }) // .on()

  $(".movieTitle").on("click", function(){
    console.log("working");
  });
}); // document.ready
  //
