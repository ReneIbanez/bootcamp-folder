$("button").on("click",function(){

  var date = $("input").val();


  var apiKey = "Pdj8KrPgUjxs5IhRbP4w1avkKmPlmiqhXmJmr2eN";

  var apiUrl= "https://api.nasa.gov/planetary/apod?date="+date+"&api_key="+apiKey;
  $.ajax({
     url: apiUrl,// Work with the response
    success: function( response ) {
      console.log( response ); // server response
      $("img").attr("src", response.url);
      $("p").append();
     },  error: function(r){
        console.log(r); //server response
                  }
                });
      $('input').val("");



});
