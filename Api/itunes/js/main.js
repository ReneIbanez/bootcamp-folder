  $(document).ready(function(){
  $('#btn').on("click",function(){
    var artist = $("#name").val();
    var url = "https://itunes.apple.com/search?term=" + encodeURIComponent(artist)
    $.ajax({
      url: url,
      datatype: "json",
      contantType: "application",
      success: function( response ) {
        console.log( response ); // server response
        $("#par1").text(response.trackId.collectionCensoredName)
      }
    });
  });

  // $(document).ready(function(){
//
//
//     var corsProxy = "https://cors-anywhere.herokuapp.com/";
//
//     var artist = $("#name").val();
//     $('#btn').on("click",function(){
//     // var apiURL = corsProxy +apiURL+"https://itunes.apple.com/search?entity="+ artist;
//     var url = corsProxy + "https://itunes.apple.com/search?term=" + encodeURIComponent(artist)
//
//
// $.ajax({
//      url: apiURL + artist +"artist/" + corsProxy,
//      datatype: "json",
//      contantType: "application",
//
//
//      success: function( response ) {
//        console.log( response ); // server response
//       $("#par1").text(response);











});
