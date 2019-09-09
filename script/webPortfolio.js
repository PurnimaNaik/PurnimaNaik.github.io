
$(document).ready(function(){
  $(document).scroll(function(){
    $("#miniIntro").animate({left: '250px'},1100);
    $(".about").fadeIn(1100);
    $("#p").fadeIn(1100);
  });
});


$("#pop").on("click", function() {
  $('#imagepreview').attr('src', $('#imageresource').attr('src')); // here asign the image to the modal when the user click the enlarge link
  $('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});

$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
});


$(document).ready(function(){
  var scroll_pos = 0;

  $(document).scroll(function() {
    scroll_pos = $(this).scrollTop();

    if(scroll_pos <450) {

      $("#1").css('text-decoration', 'none');
      $("#2").css('text-decoration', 'none');
      $("#4").css('text-decoration', 'none');
      $("#5").css('text-decoration', 'none');
      $("#3").css('text-decoration', 'none');
    }

    else if(scroll_pos > 660&&scroll_pos < 850) {

      $("#1").css('text-decoration', 'underline');
      $("#2").css('text-decoration', 'none');
      $("#4").css('text-decoration', 'none');
      $("#5").css('text-decoration', 'none');
      $("#3").css('text-decoration', 'none');
    }
    else if(scroll_pos > 850&&scroll_pos < 1600) {
      $("#2").css('text-decoration', 'underline');
      $("#1").css('text-decoration', 'none');
      $("#4").css('text-decoration', 'none');
      $("#5").css('text-decoration', 'none');
      $("#3").css('text-decoration', 'none');
    }
    else if(scroll_pos > 1980 &&scroll_pos < 2300) {
      $("#1").css('text-decoration', 'none');
      $("#2").css('text-decoration', 'none');
      $("#4").css('text-decoration', 'none');
      $("#5").css('text-decoration', 'none');
      $("#3").css('text-decoration', 'none');
    }
    else if(scroll_pos > 2300 && scroll_pos < 2800) {
      $("#4").css('text-decoration', 'underline');
      $("#1").css('text-decoration', 'none');
      $("#2").css('text-decoration', 'none');
      $("#5").css('text-decoration', 'underline');
      $("#3").css('text-decoration', 'underline');
    }

  });

  $("a").on('click', function(event) {

    if (this.hash !== "") {

      event.preventDefault();


      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top -20
      }, 800, function(){


        window.location.hash = hash;
      });
    }
  });

});
