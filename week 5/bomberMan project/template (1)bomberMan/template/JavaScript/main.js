// //////////////setup listener
// $(document).ready(function(){
// var marginLeft=0, marginTop=0;
//
// });
var bob = 0;

$(document).keydown(function(e) {
  if(e.which==39){
    bob +=10;
    $("#playerOne").css("margin-left", bob +"px");
 }else if( e.which == 37 ){
   bob -=10;
   $("#playerOne").css("margin-left", bob +"px");

 }else if( e.which == 38 ){
   bob +=10;
   $("#playerOne").css("margin-top", bob +"px");
 }else if( e.which == 40 ){
     bob -=10;
     $("#playerOne").css("margin-top", bob +"px");
   }

});


// if (e.keyCode == '39') {
// marginLeft +=10;
// document.getElementById('playerOne').style.marginLeft = marginLeft +"px" ;
//
//    }



// // var marginLeft = 0;
// // var marginTop = 0;
//
//
//
// // var move  = function domove(e){
//
//

//   //  if (e.keyCode == '39') {
//     //  marginLeft +=10;
//      document.getElementById('playerOne').style.marginLeft = marginLeft +"px" ;
//
//    }

 // else if (e.keyCode == '37') {
//      marginLeft -=10;
//      document.getElementById('playerOne').style.marginLeft = marginLeft +"px" ;
//
//
//
//    }
//    else if (e.keyCode == '40') {
//      marginTop +=10;
//      document.getElementById('playerOne').style.marginTop = marginTop +"px" ;
//
//
//    }
//    else if (e.keyCode == '38') {
//      marginTop -=10;
//      document.getElementById('playerOne').style.marginTop = marginTop +"px" ;
//
//    }
//
// }
// window.addEventListener("keydown", move);
