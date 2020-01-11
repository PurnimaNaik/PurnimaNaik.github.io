
function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function Utils() {

}

Utils.prototype = {
    constructor: Utils,
    isElementInView: function (element, fullyInView) {
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).height();

        if (fullyInView === true) {
            return ((pageTop < elementTop) && (pageBottom > elementBottom));
        } else {
            return ((elementTop <= pageBottom-($(window).height()/2.5)) && (elementBottom >= pageTop));
        }

    }
};

var Utils = new Utils();

$(document).ready(function(){
  // $(document).scroll(function(){
  //   $("#miniIntro").animate({left: '250px'},1100);
  //   $(".about").fadeIn(1100);
  //   $("#p").fadeIn(1100);
  // });
});


$("#pop").on("click", function() {
  $('#imagepreview').attr('src', $('#imageresource').attr('src')); // here asign the image to the modal when the user click the enlarge link
  $('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});

$(window).scroll(function() {

  // $(".slideanim").each(function(){
  //   var pos = $(this).offset().top;

  //   var winTop = $(window).scrollTop();
  //   if (pos < winTop + 600) {
  //     $(this).addClass("slide");
  //   }
  // });
});


function openNav() {
  document.getElementById("sideNav").style.width = "250px";
}

function closeNav() {
  document.getElementById("sideNav").style.width = "0";
}


$(document).ready(function(){
  var scroll_pos = 0;
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  $(document).scroll(function() {
    scroll_pos = $(this).scrollTop();


    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }

    var isElementInView = Utils.isElementInView($('#intro'), false);
    if (isElementInView) {
      $("#1").css('text-decoration', 'none');
      $("#2").css('text-decoration', 'none');
      $("#3").css('text-decoration', 'none');
      $("#4").css('text-decoration', 'none');
      $("#5").css('text-decoration', 'none');
      
    } 

    var isElementInView = Utils.isElementInView($('#skills'), false);
    if (isElementInView) {
        $("#1").css('text-decoration', 'underline');
        $("#2").css('text-decoration', 'none');
        $("#3").css('text-decoration', 'none');
        $("#4").css('text-decoration', 'none');
        $("#5").css('text-decoration', 'none');
        
    } 

    var isElementInView = Utils.isElementInView($('#personalProjects'), false);
    if (isElementInView) {
      $("#1").css('text-decoration', 'none');
      $("#2").css('text-decoration', 'underline');
      $("#3").css('text-decoration', 'none');
      $("#4").css('text-decoration', 'none');
      $("#5").css('text-decoration', 'none');
    } 


    var isElementInView = Utils.isElementInView($('#productionProjects'), false);
    if (isElementInView) {
      $("#1").css('text-decoration', 'none');
      $("#2").css('text-decoration', 'none');
      $("#3").css('text-decoration', 'underline');
      $("#4").css('text-decoration', 'none');
      $("#5").css('text-decoration', 'none');
     
    } 
    var isElementInView = Utils.isElementInView($('#RC'), false);
    if (isElementInView) {
      $("#1").css('text-decoration', 'none');
      $("#2").css('text-decoration', 'none');
      $("#3").css('text-decoration', 'underline');
      $("#4").css('text-decoration', 'underline');
      $("#5").css('text-decoration', 'underline');
    } 


    // if(scroll_pos <450) {
    //   $("#1").css('text-decoration', 'none');
    //   $("#2").css('text-decoration', 'none');
    //   $("#3").css('text-decoration', 'none');
    //   $("#4").css('text-decoration', 'none');
    //   $("#5").css('text-decoration', 'none');
    // }

    // else if(scroll_pos > 660&&scroll_pos < 850) {

    //   $("#1").css('text-decoration', 'underline');
    //   $("#2").css('text-decoration', 'none');
    //   $("#4").css('text-decoration', 'none');
    //   $("#5").css('text-decoration', 'none');
    //   $("#3").css('text-decoration', 'none');
    // }
    // else if(scroll_pos > 850&&scroll_pos < 1600) {
    //   $("#2").css('text-decoration', 'underline');
    //   $("#1").css('text-decoration', 'none');
    //   $("#4").css('text-decoration', 'none');
    //   $("#5").css('text-decoration', 'none');
    //   $("#3").css('text-decoration', 'none');
    // }
    // else if(scroll_pos > 1980 &&scroll_pos < 2300) {
    //   $("#1").css('text-decoration', 'none');
    //   $("#2").css('text-decoration', 'none');
    //   $("#4").css('text-decoration', 'none');
    //   $("#5").css('text-decoration', 'none');
    //   $("#3").css('text-decoration', 'none');
    // }
    // else if(scroll_pos > 2300 && scroll_pos < 2800) {
    //   $("#4").css('text-decoration', 'underline');
    //   $("#1").css('text-decoration', 'none');
    //   $("#2").css('text-decoration', 'none');
    //   $("#5").css('text-decoration', 'underline');
    //   $("#3").css('text-decoration', 'underline');
    // }

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
