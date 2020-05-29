$(document).ready(function(){
    // Add smooth scrolling to all links
    $("#scroll_down").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollDown: $(hash).offset().down
        }, 1500, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });



    $(document).ready(function(){
        $('.hover-border .nav-item').click(function(){
          $('.nav-item').removeClass("active");
          $(this).addClass("active");
      });
      });














  });