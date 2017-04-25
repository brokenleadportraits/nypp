// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .




// FOR ALERT/NOTICE FADES
$(document).on('turbolinks:load', function(){
  $('.alert').delay(500).fadeIn('normal', function() {
    $(this).delay(2500).fadeOut();
  });
  $('.notice').delay(500).fadeIn('normal', function() {
    $(this).delay(2500).fadeOut();
  });
   // PHOTO DIV HIGHLIGHT HOVER
  $('.photo-div').mouseenter(function() {
    $(this).fadeTo('fast', 0.5);
  });
  $('.photo-div').mouseleave(function() {
    $(this).fadeTo('fast', 1);
  });
  // NAV A HIGHLIGHT ON HOVER
  $('li').mouseenter(function() {
    $(this).addClass('newLi');
  });
  $('li').mouseleave(function(){
    $(this).removeClass('newLi');
  });
});


// FOR FIXED NAV WHEN SCROLL
$(document).scroll(function() {    
  var scroll = $(window).scrollTop();
  if (scroll >= 240) {
    $("#fixed-nav").addClass("fixedPos");
  }
  else{
    $("#fixed-nav").removeClass("fixedPos");
  }
});




// FOR SLIDESHOW ON INDEX
$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);




// To DO LIST TEST
// $(document).ready(function() {
//     $('#button').click(function() {
        
//         var addMe = $('input[name=checkListItem]').val();
        
//         $('.list').append( '<div class="item">' + addMe + ' (x)' + '</div>');
        
//         $('.item').on('click', function() {
//             $(this).remove();
//         }); 
//     });
// });
//  

