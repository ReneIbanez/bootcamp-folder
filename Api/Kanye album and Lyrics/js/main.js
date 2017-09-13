$(document).ready(function(){

  var proxy = "https://cors-anywhere.herokuapp.com/";
  var apiURL = "http://www.kanyerest.xyz/api/";

  $("button").on("click", function () {
    var album = $("input").val();

    $.ajax({
      url: proxy + apiURL + "album/" + album,

      success: function (response) {
        $("p").html("");
        $("span").html("");
        $("ul li").remove();
        console.log(response); // server response
        $("span").append(response.album)
        $.each(response.result, function (index, value) {
          $("ul").append("<li>" + response.result[index].title + "</li>")
        });
      },
      error: function (r) {
        console.log(r); //server response
      }
    });
  });

  $("ul").on("click", "li", function(){
    var song = $(this).html();

    $.ajax({
      url: proxy + apiURL + "track/" + song,

      success: function (response) {
        $("p").html("");
        console.log(response); // server response
        $("p").append(response.lyrics);

      },
      error: function (r) {
        console.log(r); //server response
      }
    });
  });
});
