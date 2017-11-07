
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
                console.log(scroll_pos);

                if(scroll_pos <250) {
                    
                    $("#1").css('text-decoration', 'none');
                    $("#2").css('text-decoration', 'none');
                    $("#3").css('text-decoration', 'none');
                    $("#4").css('text-decoration', 'none');
                    $("#5").css('text-decoration', 'none');
                    $("#6").css('text-decoration', 'none');
          }

                else if(scroll_pos > 400&&scroll_pos < 600) {
                    
                    $("#1").css('text-decoration', 'underline');
                    $("#2").css('text-decoration', 'none');
                    $("#3").css('text-decoration', 'none');
                    $("#4").css('text-decoration', 'none');
                    $("#5").css('text-decoration', 'none');
                    $("#6").css('text-decoration', 'none');
          }
          else if(scroll_pos > 650&&scroll_pos < 1000) {
                    $("#2").css('text-decoration', 'underline');
                    $("#1").css('text-decoration', 'none');
                    $("#3").css('text-decoration', 'none');
                    $("#4").css('text-decoration', 'none');
                    $("#5").css('text-decoration', 'none');
                    $("#6").css('text-decoration', 'none');
          }
          else if(scroll_pos > 1401&&scroll_pos < 1600) {
                    $("#3").css('text-decoration', 'underline');
                    $("#1").css('text-decoration', 'none');
                    $("#2").css('text-decoration', 'none');
                    $("#4").css('text-decoration', 'none');
                    $("#5").css('text-decoration', 'none');
                    $("#6").css('text-decoration', 'none');
          }
          else if(scroll_pos > 1800 && scroll_pos < 1900) {
                    $("#4").css('text-decoration', 'underline');
                    $("#1").css('text-decoration', 'none');
                    $("#3").css('text-decoration', 'none');
                    $("#2").css('text-decoration', 'none');
                    $("#5").css('text-decoration', 'none');
                    $("#6").css('text-decoration', 'none');
          }
          else if(scroll_pos > 2001 && scroll_pos < 2100) {
                    $("#5").css('text-decoration', 'underline');
                    $("#1").css('text-decoration', 'none');
                    $("#3").css('text-decoration', 'none');
                    $("#4").css('text-decoration', 'none');
                    $("#2").css('text-decoration', 'none');
                    $("#6").css('text-decoration', 'none');
          }
          else if(scroll_pos > 2101) {
                    $("#6").css('text-decoration', 'underline');
                    $("#1").css('text-decoration', 'none');
                    $("#3").css('text-decoration', 'none');
                    $("#4").css('text-decoration', 'none');
                    $("#5").css('text-decoration', 'none');
                    $("#2").css('text-decoration', 'none');
          }
         
               
            });

  $("a").on('click', function(event) {

    if (this.hash !== "") {

      event.preventDefault();


      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top -270
      }, 800, function(){
   

        window.location.hash = hash;
      });
    } 
  });

 });
