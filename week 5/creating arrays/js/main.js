
// var images =  ["image1.png","image2.png","image3.png"];
//
// var q2 = images[0];
//
// var q3= images.length;
//
// var q4= images[images.lenth-1];
// var studentnames["jeff","jim","john","jerry","jean"];
// studentnames.foreach[(function("cool,lava"))]





var studentNames=[];
// click to add
$("#add").on("click", function(){
// takes name from the input
 $("#input").each(function(){
// and stores it in a list of (arrays)
studentNames.push($(this).val());
 $("#input").val("");

// to reset the box
});

});
$("#print").on("click", function(){
  // take all the names from the list (array)
studentNames.forEach(function(a){
// append them to the list (ol)
$("ol").append("<li>"+a+"</li>");
 studentNames=[];


});


});
