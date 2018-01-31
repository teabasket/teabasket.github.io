
$(document).ready(function() {
  $('#content_dialer').hide();
  $('#content_list').hide();
  $('#content_addcontact').hide();
});

$("#Dialer").click(function(){
  $("#content_dialer").show();
  $("#content_list").hide();
  $("#content_addcontact").hide();
});

$("#contact_list").click(function(){
  $("#content_dialer").hide();
  $("#content_list").show();
  $("#content_addcontact").hide();
});

$("#add_contact").click(function(){
  $("#content_dialer").hide();
  $("#content_list").hide();
  $("#content_addcontact").show();
});
