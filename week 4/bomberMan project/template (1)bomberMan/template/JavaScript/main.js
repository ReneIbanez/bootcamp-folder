//////////////setup listener

var marginLeft = 0;
var marginTop = 0;



var move  = function domove(e){


   if (e.keyCode == '39') {
     marginLeft +=10;
     document.getElementById('playerOne').style.marginLeft = marginLeft +"px" ;

   }
   else if (e.keyCode == '37') {
     marginLeft -=10;
     document.getElementById('playerOne').style.marginLeft = marginLeft +"px" ;



   }
   else if (e.keyCode == '40') {
     marginTop +=10;
     document.getElementById('playerOne').style.marginTop = marginTop +"px" ;


   }
   else if (e.keyCode == '38') {
     marginTop -=10;
     document.getElementById('playerOne').style.marginTop = marginTop +"px" ;

   }

}
window.addEventListener("keydown", move);
