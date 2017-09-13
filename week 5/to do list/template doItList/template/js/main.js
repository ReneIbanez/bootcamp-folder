// type text inside the input on
// when li gets clicked on it will be styled
// when you perform an on click function to clear list button it will claar all li
// when you perform an  on click on clear completed it will clen all style li
// when you hover



var items;

$(document).ready(function(){
  $("#inputBtn").on("click", function(){
    items= $("input").val()
    $("ol").append("<li>"+items+"</li>")
    $("input").val("");
      $("p span").html( $("li:not(.checked)").length );

  });

  $(document).on("keydown",function(e){
    if(e.which==13){
      items=$("input").val();
      $("ol").append("<li>"+items+"\n<span class='change' id='edit'><a href='#'>edit</a></span>&nbsp;" + "<a href='#'><span class='change erase'>remove<span/></a></li>");
      $("input").val("");
      $("span p").html( $("li:not(.checked)").length );
    }

    $("ol").on("click", "li .erase", function(){
      $(".selfish").remove();
      $("span p").html( $("li:not(.checked)").length );

    });
  });
  $("ol").on("click","#edit",function(){
  //  $(this).parent("span").parent('li').replaceWith(prompt("edit my li"));

    var liNew=prompt("edit my li");
     $(".selfish").replaceWith("<li>"+liNew+"\n<span class='change' id='edit'><a href='#'>edit</a></span>&nbsp;" + "<a href='#'><span class='change erase'>remove<span/></a></li>");
  });


  $("#clear").on("click", function(){
    $("ol").empty();
  });





  $("ol").on("click","li",function(){
    $(this).toggleClass('checked');
  //  $(this).children("span").toggleClass('hidden');
    $("p span").html( $("li:not(.checked)").length );


  });
  $("ol").on("mouseenter","li",function(){
    $(this).addClass('selfish');
    $(".selfish span").removeClass('change');
    //$(".change").css("display","block");
  });

  $("ol").on("mouseleave","li",function(){
    $(".selfish span").addClass('change');
    $(this).removeClass('selfish');

  });



  $("#completed").on("click", function(){
    $(".checked").remove();
    $("span p").html( $("li:not(.checked)").length );
  });




});
