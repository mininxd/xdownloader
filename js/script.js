import {spotify} from "./placeholder.js";
import {fetchDown} from "./fetch.js";
spotify();

$('#inputQueryEl').keypress(
  function(event){
    if (event.which == '13') {
      fetchDown();
      $("#inputQueryEl").blur();
      $("#inputQueryEl").attr('disabled', 'true');
    }
});


$('#thumb').attr('src','../test.jpeg')
$('#judulLagu').html('Binding Lights')


$(document).ready().scroll(function() {
  if ($(this).scrollTop() > 10) {
   $('.title').css('font-size','35px');
  }
  if ($(this).scrollTop() < 4) {
   $('.title').css('font-size','50px');
  }
})