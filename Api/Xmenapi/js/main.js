// xmen app

$("button").on("click",function(){

  var marvel = $("input").val();


  var apiKey = "56c8ba2c6f59fdcdbf5f48d6cba255b9";

  var apiUrl= "https://gateway.marvel.comGET/v1/public/characters/{CharacterList}/comics&api_key="+apiKey;


$.ajax({
     url: apiUrl,// Work with the response



    success: function( response ) {
      console.log( response ); // server response
      $("img").attr(response.url);



     },  error: function(r){
        console.log(r); //server response
                  }
                });


      $('input').val("");



});
