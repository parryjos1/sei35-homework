$(document).ready(function(){

  $.getJSON("https://api.nasa.gov/planetary/apod?api_key=ganSnIpCXu8dOvncckhgkNe4ijUF88VN4kFGMI8n")
  .done(function(result){
    $("#random").append(`<p>${result.explanation}</p>`)
  })

})
