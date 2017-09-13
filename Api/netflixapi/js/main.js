$("button").on("click", function(){

var movie = $("input").val();
// CORSPROXY makes the request to the api by hosting the request through the proxy.
var corsProxy =  "https://cors-anywhere.herokuapp.com/";
// https:cors-anywhere.herokuapp.com/
// "https://cors-anywhere.herokuapp.com/";
//   https://cors-anywhere.herokuapp.com/
// // 'https://free-cors-proxy.herokuapp.com/';
var apiURL = corsProxy + "http://netflixroulette.net/api/api.php?title=" + movie;
$.ajax({
  url: apiURL,

success: function( response ) {
  console.log( response ); // server response
 $(".poster").attr("src", response.poster);

},
 error: function(r){
  console.log(r); //server response
}

});

});
