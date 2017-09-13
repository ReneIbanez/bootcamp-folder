var n0= [];
var activeBox = box1;



// trying to put this with space bar so it can play the array
// if(n0.length>=1){
//   n0.forEach(function(track){
//     playSound(track);
//
//   });
//
// }
// gana click play
// a sound is gana play
// click play agin song will stop
// set up a local strorage for selcted beats
// will click on btn select a sound



// set my bpm threw the noteItems
var bpm = +$("#bpm").val();
var count = 0;
var playing = false;
var tick;
var note = 0;
// set your bpm
// set the tempo
$("#bpm").on("input",function(){

  clearInterval(tick);
  bpm = $("#bpm").val();
  console.log(bpm);
  //  setInterval(updateMetronome, (60000/bpm));
});

//this is the metronome bar
function updateMetronome(){
  console.log("hi");
  $("#note"+ count).toggleClass("metronomeActive");
  playSound("sounds/hihat-808.wav");
  $("#metronome").css("background-color","null");
  count++;
if(count ==16){

    count= 0;
  }
}

function playSound(fileName){
  var sound= new Howl({
    src:[fileName],
    loop: false,
  });
  sound.play();
// playung evrything at the same time need to set a sound order

        // setInterval(function(){
        //   for(var i = 0;i<=n0.length;){
        //     playSound(n0[i]);
        //     console.log(no[i]);
        //     if(audio.ended == true){
        //       i++;
        //     }
        //   }
        // },60000/bpm);


        // do nothing
        //in here we need to push sound or key to an array to hold that key
        console.log(bpm)
}





//if spacebar is pressed, start
  $(document).keydown(function(e){
    if(e.which== 32){
console.log("tick",tick)
      if(tick){
        clearInterval(tick)
        tick = null;
      }else {
        tick = setInterval(updateMetronome, 60000/bpm);
        //in here we need to push sound or key to an array to hold that key
        console.log(bpm)

      }
    }

    // if(playing == false){
    //   playing = true;

    //     while(playing == true){
    //       for (var i = 0; i < 16; i++) {
    //         $(".noteItem").removeClass("playCycle");
    //         $("#note").addClass("playCycle");
    //         // $(".noteItems").eq(++).css("background-color","lightblue");
    //         updateMetronome(i);
    //
    //         if (i==15){
    //           i=0;
    //           break;
    //         }
    //       }
    //
    //
    //     }
    //   }
    //
    // }else{
    //   playing = false;
    // }

  });











  // $('#inputbox').live("keypress", function(e) {
  //      var code = (e.keyCod 13 e.keyCode : e.which);
  //      if (code == 13) {
  //         e.preventDefault();
  //         e.stopPropagation();
  //         $(this).closest('form').submit();
  //      }
  //   });








$(document).keyup(function(e) {
  if (e.which== 81) { //key id Q
    $("#key-q").css("background-color","transparent");
  }
  else if (e.which== 87) { //key id W
    $("#key-w").css("background-color","transparent");
  }
  else if (e.which== 65 ) { // key id A
    $("#key-a").css("background-color","transparent");
  }
  else if(e.which== 90){ // key Z
    $("#key-z").css("background-color","transparent");
  }
  else if(e.which== 83){// key id s
    $("#key-s").css("background-color","transparent");
  }
  else if(e.which== 88){// key id x
    $("#key-x").css("background-color","transparent");
  }
  else if(e.which== 69){//key id E
    $("#key-e").css("background-color","transparent");
  }
  else if(e.which== 68){//key id D
    $("#key-d").css("background-color","transparent");
  }
  else if(e.which== 82){//key id R
    $("#key-r").css("background-color","transparent");
  }
  else if(e.which== 86){ //key id V
    $("#key-v").css("background-color","transparent");
  }
  else if(e.which== 66){ // key id B
    $("#key-b").css("background-color","transparent");
  }
  else if(e.which== 67){// key id C
    $("#key-c").css("background-color","transparent");
  }
  else if(e.which== 77){// key id M
    $("#key-m").css("background-color","transparent");
  }
  else if(e.which== 72){//key id H

    $("#key-h").css("background-color","transparent");
  }
  else  if(e.which== 85){// key id U

    $("#key-u"). css("background-color","transparent");
  }
  else if(e.which== 78){// key id N

    $("#key-n").css("background-color","transparent");
  }
  else if(e.which== 74){//Key id J

    $("#key-j").css("background-color","transparent");
  }
  else  if(e.which== 73){// key id I

    $("#key-i").css("background-color","transparent");
  }
  else if(e.which== 75){// key id K

    $("#key-k").css("background-color","transparent");
  }
  else  if(e.which== 79){// key od O

    $("#key-o").css("background-color","transparent");
  }
  else  if(e.which== 76){// key id L

    $("#key-l").css("background-color","transparent");
  }
  else  if(e.which== 71){// key id G

    $("#key-g").css("background-color","transparent");
  }
  else  if(e.which== 84){// key id T

    $("#key-t").css("background-color","transparent");
  }
  else  if(e.which== 89){// key is Y

    $("#key-y").css("background-color","transparent");
  }

  else  if(e.which== 80){// key P

    $("#key-p").css("background-color","transparent");
  }
  else  if(e.which== 70){//key id F

    $("#key-f").css("background-color","transparent");
  }
  else  if(e.which== 89){ //key is Y

    $("#key-y").css("background-color","transparent");
  }

});








//
// //bass button
// // gata make an active state first
// $(document).keydown(function(e){
//   if(e.which== 49){
//
//     $(document).keydown(function(e) {
//       if (e.which== 81) { //key id Q
//         playSound("sounds/g_sp_125_19.wav");
//         $("#key-q").css("background-color","red");
//       }
//       else if (e.which== 87) { // key id W
//         playSound("sounds/shaker-analog.wav");
//         $("#key-w").css("background-color","red");
//       }
//       else if (e.which== 65 ) { // key id A
//         playSound("sounds/clap-analog.wav");
//         $("#key-a").css("background-color","red");
//       }
//       else if(e.which== 90){ // key Z
//         playSound("sounds/clap-fat.wav");
//         $("#key-z").css("background-color","red");
//       }
//       else if(e.which== 83){// key id s
//         playSound("sounds/clap-808.wav");
//         $("#key-s").css("background-color","red");
//       }
//       else if(e.which== 88){// key id X
//         playSound("sounds/clap-crushed.wav");
//         $("#key-x").css("background-color","red");
//       }
//       else if(e.which== 69){//key id E
//         playSound("sounds/shaker-suckup.wav");
//         $("#key-e").css("background-color","red");
//       }
//       else if(e.which== 68){ //key id D
//         playSound("sounds/clap-tape.wav");
//         $("#key-d").css("background-color","red");
//       }
//       else if(e.which== 82){// key id R
//         playSound("sounds/crash-noise.wav");
//         $("#key-r").css("background-color","red");
//       }
//       else if(e.which== 86){ //key id V
//         playSound("sounds/crash-808.wav");
//         $("#key-v").css("background-color","red");
//       }
//       else if(e.which== 66){ // key id B
//         playSound("sounds/hihat-ring.wav");
//         $("#key-b").css("background-color","red");
//       }
//       else if(e.which== 67){// key id C
//         playSound("sounds/d-block-sound1-qbh.wav");
//         $("#key-c").css("background-color","red");
//       }
//       else if(e.which== 77){// key id M
//         playSound("sounds/ride-acoustic01.wav");
//         $("#key-m").css("background-color","red");
//       }
//       else if(e.which== 72){//key id H
//         playSound("sounds/kick-big.wav");
//         $("#key-h").css("background-color","red");
//       }
//       else  if(e.which== 85){// key id U
//         playSound("sounds/PIANO_do5.wav");
//         $("#key-u").css("background-color","red");
//       }
//       else if(e.which== 78){// key id N
//         playSound("sounds/kick-floppy.wav");
//         $("#key-n").css("background-color","red");
//       }
//       else if(e.which== 74){//Key id J
//         playSound("sounds/kick-floppy.wav");
//         $("#key-j").css("background-color","red");
//       }
//       else  if(e.which== 73){// key id I
//         playSound("sounds/PIANO_lab3.wav");
//         $("#key-i").css("background-color","red");
//       }
//       else if(e.which== 75){// key id K
//         playSound("sounds/PIANO_lab4.wav");
//         $("#key-k").css("background-color","red");
//       }
//       else  if(e.which== 79){// key od O
//         playSound("sounds/PIANO_Mi0.wav");
//         $("#key-o").css("background-color","red");
//       }
//       else  if(e.which== 76){// key id L
//         playSound("sounds/PIANO_Mib4.wav");
//         $("#key-l").css("background-color","red");
//       }
//       else  if(e.which== 71){// key id G
//         playSound("sounds/kick-oldschool.wav");
//         $("#key-g").css("background-color","red");
//       }
//       else  if(e.which== 84){// key id T
//         playSound("sounds/259[kb]fukubass2.aif.mp3");
//         $("#key-t").css("background-color","red");
//       }
//       else  if(e.which== 89){// key is Y
//         playSound("sounds/PIANO_re2.wav");
//         $("#key-y").css("background-color","red");
//       }
//       else  if(e.which== 80){// key P
//         playSound("sounds/Gd pno A1 (R).wav");
//         $("#key-p").css("background-color","red");
//       }
//       else  if(e.which== 70){//key id F
//         playSound("sounds/423[kb]bass-rolly-down-up.wav.mp3");
//         $("#key-f").css("background-color","red");
//       }
//       else  if(e.which== 89){ //key is Y
//         playSound("sounds/.wav");
//         $("#key-y").css("background-color","red");
//       }
//
//     });



    // initially set keys
    // lil bit of everything
    $(document).keydown(function(e){
      if(e.which== 220){
        console.log("clicked");
        setInterval(function(){
          playSound(n0[note])
          note++;
          if(note>n0.length){
            console.log("finished");
            note= 0;
          }
        },3000);
      }
});



// rember your key map is gana have a function that connects your key down function
// }else{
    $(document).keydown(function(e) {
      if (e.which== 81) { //key id Q
        playSound("sounds/perc-808.wav");
        $(keymap).css("background-color","red");
        if($("#record").hasClass("recordToggle")){
          n0.push("sounds/perc-808.wav");
        }
      }
      else if (e.which== 87) { // key id W
        playSound("sounds/shaker-analog.wav");
        $("#key-w").css("background-color","red");
        if($("#record").hasClass("recordToggle")){
          n0.push("sounds/shaker-analog.wav");
        }
      }
      else if (e.which== 65 ) { // key id A
        playSound("sounds/snare-pinch.wav");
        $("#key-a").css("background-color","red");
        if($("#record").hasClass("recordToggle")){
          n0.push("sounds/clap-fat.wav");
        }

      }
      else if(e.which== 90){ // key Z
        playSound("sounds/clap-tape.wav");
        $("#key-z").css("background-color","red");
        if($("#record").hasClass("recordToggle")){
          n0.push("sounds/clap-tape.wav");
        }
      }
      else if(e.which== 83){// key id s
        playSound("sounds/clap-808.wav");
        $("#key-s").css("background-color","red");
        if($("#record").hasClass("recordToggle")){
          n0.push("sounds/clap-808.wav");
        }
      }
      else if(e.which== 88){// key id X
        playSound("sounds/d-block-trumpet1-qbh.wav");
        $("#key-x").css("background-color","red");
        if($("#record").hasClass("recordToggle")){
          n0.push("sounds/d-block-trumpet1-qbh.wav");
        }
      }
      else if(e.which== 69){//key id E
        playSound("sounds/kick-tron.wav");
        $("#key-e").css("background-color","red");
        if($("#record").hasClass("recordToggle")){
          n0.push("sounds/kick-tron.wav");
        }
      }
      else if(e.which== 68){ //key id D
        playSound("sounds/snare-block.wav");
        $("#key-d").css("background-color","red");
        if($("#record").hasClass("recordToggle")){
          n0.push("sounds/clap-slappper.wav");
        }
      }
      else if(e.which== 82){// key id R
        playSound("sounds/crash-noise.wav");
        $("#key-r").css("background-color","red");
        if($("#record").hasClass("recordToggle")){
          n0.push("sounds/crash-noise.wav");
        }
      }
      else if(e.which== 86){ //key id V
        playSound("sounds/g_tdd_120_10.wav");
        $("#key-v").css("background-color","red");
        if($("#record").hasClass("recordToggle")){
          n0.push("sounds/crash-808.wav");
        }
      }
      else if(e.which== 66){ // key id B
        playSound("sounds/hihat-ring.wav");
        $("#key-b").css("background-color","red");
        if($("#record").hasClass("recordToggle")){
          n0.push("sounds/hihat-ring.wav");
        }
      }
      else if(e.which== 67){// key id C
        playSound("sounds/hihat-digital.wav");
        $("#key-c").css("background-color","red");
        if($("#record").hasClass("recordToggle")){
          n0.push("sounds/hihat-digital.wav");
        }
      }
      else if(e.which== 77){// key id M
        playSound("sounds/my_face.mp3");
        $("#key-m").css("background-color","red");
        if($("#record").hasClass("recordToggle")){
          n0.push("sounds/my_face.mp3");
        }
      }
      else if(e.which== 72){//key id H
        playSound("sounds/kick-big.wav");
        $("#key-h").css("background-color","red");
        if($("#record").hasClass("recordToggle")){
          n0.push("sounds/kick-big.wav");
        }
      }
      else  if(e.which== 85){// key id U
        playSound("sounds/PIANO_do5.wav");
        $("#key-u").css("background-color","red");
        if($("#record").hasClass("recordToggle")){
          n0.push("sounds/PIANO_do5.wav");
        }
      }
      else if(e.which== 78){// key id N
        playSound("sounds/kick-floppy.wav");
        $("#key-n").css("background-color","red");
        if($("#record").hasClass("recordToggle")){
          n0.push("sounds/kick-floppy.wav");
        }
      }
      else if(e.which== 74){//Key id J
        playSound("sounds/kick-gritty.wav");
        $("#key-j").css("background-color","red");
        if($("#record").hasClass("recordToggle")){
          n0.push("sounds/kick-gritty.wav");
        }
      }
      else  if(e.which== 73){// key id I
        playSound("sounds/PIANO_lab3.wav");
        $("#key-i").css("background-color","red");
        if($("#record").hasClass("recordToggle")){
          n0.push("sounds/PIANO_lab3.wav");
        }
      }
      else if(e.which== 75){// key id K
        playSound("sounds/PIANO_lab4.wav");
        $("#key-k").css("background-color","red");
        if($("#record").hasClass("recordToggle")){
          n0.push("sounds/PIANO_lab4.wav");
        }
      }
      else  if(e.which== 79){// key od O
        playSound("sounds/PIANO_Mi0.wav");
        $("#key-o").css("background-color","red");
        if($("#record").hasClass("recordToggle")){
          n0.push("sounds/PIANO_Mi0.wav");
        }
      }
      else  if(e.which== 76){// key id L
        playSound("sounds/PIANO_Mib4.wav");
        $("#key-l").css("background-color","red");
        if($("#record").hasClass("recordToggle")){
          n0.push("sounds/PIANO_Mib4.wav");
        }
      }
      else  if(e.which== 71){// key id G
        playSound("sounds/kick-stomp.wav");
        $("#key-g").css("background-color","red");
        if($("#record").hasClass("recordToggle")){
          n0.push("sounds/kick-stomp.wav");
        }
      }
      else  if(e.which== 84){// key id T
        playSound("sounds/259[kb]fukubass2.aif.mp3");
        $("#key-t").css("background-color","red");
        if($("#record").hasClass("recordToggle")){
          n0.push("sounds/259[kb]fukubass2.aif.mp3");
        }
      }
      else  if(e.which== 89){// key is Y
        playSound("sounds/PIANO_re2.wav");
        $("#key-y").css("background-color","red");
        if($("#record").hasClass("recordToggle")){
          n0.push("sounds/PIANO_re2.wav");
        }
      }
      else  if(e.which== 80){ //key is p
        playSound("sounds/d-block-piano1-qbh.wav");
        $("#key-p").css("background-color","red");
        if($("#record").hasClass("recordToggle")){
          n0.push("sounds/d-block-piano1-qbh.wav");
        }

      }
      else  if(e.which== 70){//key id F
        playSound("sounds/423[kb]bass-rolly-down-up.wav.mp3");
        $("#key-f").css("background-color","red");
        if($("#record").hasClass("recordToggle")){
          n0.push("sounds/423[kb]bass-rolly-down-up.wav.mp3");
        }
      }else if (e.which==13) {
        $('#record').toggleClass("recordToggle");
      }

    });

//   }
//
// });
