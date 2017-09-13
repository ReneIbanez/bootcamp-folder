// user can click a back button and a foward button
// that is linked to my image folder
// i must set up var =attached to my img file
//so every click



// can slide threw images





// get shark images
var animals = ["img/anotherGreatWhite.jpg",
"img/greatWhiteOutWater.jpg",
"img/megalodonShark.jpg",
"img/megalodonSharkCrazy.jpg",
"img/oBoy.jpg",
"img/sharkFace.jpg",
"img/StreetSharks.jpg",
"img/whiteShark.jpg"];
var count = 0;


$("#back").on("click", function(){
  if (count==0){
    count =animals.length-1;
  }else{
    count= count-1;
  }
  $("#sharks").attr("src",animals[count]);
  });
// alert("ypppppp");

$("#foward").on("click", function(){
  if (count==7){
    count =animals.length-8;
  }else{
    count= count+1;
  }
  $("#sharks").attr("src",animals[count]);



});
















 // make a method that takes an integer corresponding to an inddex in the animals list and changes the image to be sourced to that
// next button adds 1 to the count or if at max resets then runs ^ with the count
// previous button subtracts 1 from the count or sets to max if at 0 then runs ^ with the count
// run the initial method with count

  //  $(".container").append('<img src="'+ animals[0] + '" alt="">');
 //
 //
 // $(".container").append('<img src="img/greatWhiteOutWater.jpg" alt="">');
 // $(".container").append('<img src="img/megalodonShark.jpg" alt="">');
 // $(".container").append('<img src="img/megalodonSharkCrazy.jpg" alt="">');
 // $(".container").append('<img src="img/oBoy.jpg" alt="">');
 // $(".container").append('<img src="img/sharkFace.jpg" alt="">');
 // $(".container").append('<img src="img/StreetSharks.jpg" alt="">');
 // $(".container").append('<img src="img/whiteShark.jpg" alt="">');


 // $(document).ready(function(){
 //    $("img").append('<li</li>');
 // });
 //
