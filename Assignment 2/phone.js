
$(document).ready(function() {
  $('#content_dialer').hide();
  $('#content_list').hide();
  $('#content_addcontact').hide();
  $("#content_gestures").hide();
});

$("#Dialer").click(function(){
  $("#content_dialer").show();
  $("#content_list").hide();
  $("#content_addcontact").hide();
  $("#content_gestures").hide();
});

$("#contact_list").click(function(){
  $("#content_dialer").hide();
  $("#content_list").show();
  $("#content_addcontact").hide();
  $("#content_gestures").hide();
});

$("#add_contact").click(function(){
  $("#content_dialer").hide();
  $("#content_list").hide();
  $("#content_addcontact").show();
  $("#content_gestures").hide();
});

$("#test_gestures").click(function(){
  $("#content_gestures").show();
  $("#content_dialer").hide();
  $("#content_list").hide();
  $("#content_addcontact").hide();
})

// Dialing the numbers
$("#one").click(function(){
  $("#dialer_pad").val($("#dialer_pad").val() + "1")
});

$("#two").click(function(){
  $("#dialer_pad").val($("#dialer_pad").val() + "2")
});

$("#three").click(function(){
  $("#dialer_pad").val($("#dialer_pad").val() + "3")
});

$("#four").click(function(){
  $("#dialer_pad").val($("#dialer_pad").val() + "4")
});

$("#five").click(function(){
  $("#dialer_pad").val($("#dialer_pad").val() + "5")
});

$("#six").click(function(){
  $("#dialer_pad").val($("#dialer_pad").val() + "6")
});

$("#seven").click(function(){
  $("#dialer_pad").val($("#dialer_pad").val() + "7")
});

$("#eight").click(function(){
  $("#dialer_pad").val($("#dialer_pad").val() + "8")
});

$("#nine").click(function(){
  $("#dialer_pad").val($("#dialer_pad").val() + "9")
});

$("#zero").click(function(){
  $("#dialer_pad").val($("#dialer_pad").val() + "0")
});

$("#pound").click(function(){
  $("#dialer_pad").val($("#dialer_pad").val() + "#")
});

$("#star").click(function(){
  $("#dialer_pad").val($("#dialer_pad").val() + "*")
});

$("#Clear_Dial").click(function(){
  $("#dialer_pad").val("")
});

// Test gestures tab
var downX = 0;
var downY = 0;
var UpX = 0;
var UpY = 0;

$("#gesture_area").mousedown(function(){
  $("#gesture_type").val("Mouse Down")
  $("#gesture_area").mousemove(function( event ){
    downX += event.pageX
    downY += event.pageY
  });
});


$("#gesture_area").mouseup(function( ){

  $("#gesture_area").mousemove(function( event ){
    UpX += event.pageX
    UpY += event.pageY
  });
  //alert("downX: "+ downX)
  //alert("UpX: "+ UpX)
  if (downX < UpX) {
    $("#gesture_type").val("Swipe Left")
    downX = 0;
    UpX = 0;
  }
  else if (downX > UpX) {
    $("#gesture_type").val("Swipe Right")
    downX = 0;
    UpX = 0;
  }
  else {
    $("#gesture_type").val("Mouse Up")
    downX = 0;
    UpX = 0;
  }

});
