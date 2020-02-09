
$(document).ready(function(){


  $("#searchCocktail").keyup(function(event) {
      if (event.keyCode === 13) {
          $("#search").click();
      }
  });


$('#search').on('click', function(){


  $('#results').show().empty();
  $('#details').hide()


  const searchCocktail = $('#searchCocktail').val();
  console.log('Search Cocktail:', searchCocktail);

  $.getJSON(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchCocktail}`)

  .done(function(data){
    console.log('success:', data);
    data.drinks.forEach(function(cocktail){



      // cocktail.strDrink
      const $cocktailItem = $(`<img src="${cocktail.strDrinkThumb}">`);

      $('#').append(`
        <div>
        <strong>
        ${cocktail.strDrink}
        </strong>
        </div>`);






      $cocktailItem.on('click', function(){
        console.log('clicked ID', cocktail.idDrink);



        $.getJSON(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktail.idDrink}`)
        .done(function(data){
          console.log('cocktail details:', data);
          $('#results').hide();
          $('#details').html(`
            <strong>Name: </strong>${cocktail.strDrink}</br>

            </br>
            </br>
            <img src="${cocktail.strDrinkThumb}">
            </br>

            <strong>Alcoholic: </strong>${cocktail.strAlcoholic}</br>
            </br>
            <strong>Instructions: </strong><p>${cocktail.strInstructions}</p>
            <strong>Glass: </strong>${cocktail.strGlass}</br>
            </br>
            <strong>Ingredients: </strong>
            <ul>
            <li>
            ${cocktail.strMeasure1} ${cocktail.strIngredient1}
            <img src="https://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient1}.png" id="ingredients_img">

            </li>
            <li>
            ${cocktail.strMeasure2} ${cocktail.strIngredient2}
            <img src="https://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient2}.png" id="ingredients_img">
            </li>
            <li>
            ${cocktail.strMeasure3} ${cocktail.strIngredient3}
            <img src="https://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient3}.png" id="ingredients_img">
            </li>
            <li>
            ${cocktail.strMeasure4} ${cocktail.strIngredient4}
            <img src="https://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient4}.png" id="ingredients_img">
            </li>
            </ul>





            `).show();

        })
        .fail(console.warn)


      });
      $('#results').append($cocktailItem);

    });//


  })
  .fail(function(err){
    console.log('ERROR:', err);
  });

});//end of #search button click handler


});//document ready
