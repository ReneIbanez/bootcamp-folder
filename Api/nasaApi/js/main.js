
// nasa picture of the day
$("button").on("click",function(){

  var date = $("input").val();
   console.log(date);
   var apiKey = "eXf7NdB0NeknaXZjshOxkgEm6TUz55gEtYtKO51Q";
     var apiUrl = "https:api.nasa.gov/planetary/apod?date="+date+"&api_key="+apiKey;


$.ajax({
   url: apiUrl,// Work with the response
  success: function( response ) {
    console.log( response ); // server response
    $("img").attr("src", response.url);

   },  error: function(r){
      console.log(r); //server response
                }
              });
    $('input').val("");



});
