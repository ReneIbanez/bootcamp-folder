// how to make a drink app
$("button").on("click",function(){

  var drinks = $("input").val();


  // var apiKey = ;

  var apiUrl= "http://www.thecocktaildb.com/api/json/v1/1/search.php?s="+drinks;


  $.ajax({
     url: apiUrl,// Work with the response
    success: function( response ) {
      console.log( response ); // server response
      $("p").text(response.drinks.strInstructions);
      $("img").attr("src" ,response.drinks);





     },  error: function(r){
        console.log(r); //server response
                  }
                });
      $('input').val("");
});
