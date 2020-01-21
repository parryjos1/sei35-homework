$(document).ready(function() {
  let pageAdvance = 0
  let currentPage = 1
  let main = function(xhr) {
    $("#output").empty();
    xhr.send();
    xhr.onload = function() {
      data = JSON.parse(xhr.response)
      for(i = 0; i < data["results"].length; i++) {
        if(data["results"][i]["poster_path"] !== null) {
          $("#output").append(`<img class="show" id="${i}" src="http://image.tmdb.org/t/p/w185/${data["results"][i]["poster_path"]}"></img>`)
        } else {
          $("#output").append(`<img class="show" id="${i}" src="https://placebear.com/185/278"></img>`)
        }
      }
      $(".show").on("click", function(){
        $(".show").hide()
        $("#pages").hide();
        currentPage = 1;
        let result = data["results"][$(this)[0]["id"]]
        $("#output").append(`<div class="movieOutput">
        <h1>Title: ${result["title"]}</h1>
        <h2>Released: ${result["release_date"]}<br>
        Average Score: ${result["vote_average"]}</h2>
        <p>Description: ${result["overview"]}</p>
        <img src="http://image.tmdb.org/t/p/w185/${result["poster_path"]}"</img></div>`
        )
        return
      })
    pages();
    }
  }
  let toPages = function() {
    $(".toPage").on("click", function() {
      currentPage = parseInt($(this)[0]["id"])
      let xhr = new XMLHttpRequest();
      xhr.open("GET", `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${$("#movie").val()}&page=${$(this)[0]["id"]}`);
      main(xhr)
    })
  }
  $("#search").on("click", function() {
    $("#pages").show()
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${$("#movie").val()}`);
    main(xhr);
  })
  let pages = function() {
    $("#pages").empty();
    if((currentPage+3) > data["total_pages"]) {
      pageAdvance = data["total_pages"]
    } else {
      pageAdvance = currentPage + 2
    }
    for(i = currentPage; i <= pageAdvance; i++) {
      $("#pages").append(`<button class="toPage" id="${i}">${i}</button>`)
    }
    toPages()
  }
})
