$(document).ready(function(){




$("button").on('click',function(){
  var change =$("#h").val();
  var widen  =$("#w").val();


$("section").css('height', change + "px").css('width', widen + "px");


$("input").val("");

});








































});
