// weather api

$("button").on("click", function(){

  var location = $("input").val();
  // CORSPROXY makes the request to the api by hosting the request through the proxy.
  var corsProxy = "https://cors-anywhere.herokuapp.com/";
  var apiURL = corsProxy + "https://api.darksky.net/forecast/b9bb6d0df4efc81bceaddf7992ad3dc6/37.8267,-122.4233";
// sets up user location
  var apiURL;
  navigator.geolocation.getCurrentPosition(function(location){
    var lat= location.coords.latitude;
    var lng= location.coords.longitude;
    var apiURL1  ="https://jsonp.afeld.me/?url=https://api.darksky.net/forecast/REMOVEDAPIKEY/"+lat+","+lng;


  });



  $.ajax({
    url: apiURL,
    contentType: "application/json",


    success: function( response ) {
      console.log( response ); // server response
      $("p").text(response.currently.summary);
    },
    error: function(r){
      console.log(r); //server response
    }

  });

});
