$(document).ready(function() {
    $(".slide:first").show();
    
    var slideCount = $(".slider").children().length;
    var currentSlide = 1;
    
    function nextSlide() {
      if (currentSlide < slideCount) {
        $(".slide").hide();
        $(".slide:nth-child(" + (currentSlide + 1) + ")").fadeIn();
        currentSlide++;
      } else {
        $(".slide").hide();
        $(".slide:first").fadeIn();
        currentSlide = 1;
      }
    }
    
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
  });
  