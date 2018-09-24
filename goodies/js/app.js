/* App.Js */

$( document ).ready(function() {
  console.log( "ready!" );

// init Wow JS
 new WOW().init();

/* SMOOTH SCROLL */

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  /* Quick Quote Pop Up! */
//   setTimeout(function() {
//     $('#quickQuote').modal();
// }, 5000);



    $("#generate").click( function() {

    sqFt = $("#sqFt").val();
    

    if (sqFt < ' ') {
    $("#result").html('Please enter a number greater than 0');
    } else if (sqFt < 1000 ) {
    $("#result").html('Your estimated service quote is less than $195 and will take about 1 - 1.5 hours to be completed');
    } else if (sqFt == 1000 || sqFt <= 1200 ) {
      $("#result").html('Your estimated service quote is $195 - $275+ and will take about 1.5 - 2 hours to be completed');
    } else if (sqFt == 1201 || sqFt <= 2000) {
      $("#result").html('Your estimated service quote is $300 - $400+ and will take about 2.5 - 3 hours to be completed');
    } else if (sqFt == 2001 || sqFt <= 3000) {
      $("#result").html('Your estimated service quote is $400 - $555+ and will take about 3 - 3.5 hours to be completed');
    } else if (sqFt == 3001 || sqFt <= 4500) {
      $("#result").html('Your estimated service quote is $600 - $800+ and will take about 4 - 5 hours to be completed');
    } else if (sqFt == 4501 || sqFt <= 5500) {
      $("#result").html('Your estimated service quote is $950 - $1,400+ and will take about 5 - 7 hours to be completed');
    } else if (sqFt >= 5501 ) {
      $("#result").html('Your estimated service quote is $1,400+ and will take about 5 - 7 hours to be completed');
    } else {
      $("#result").html('Looks like something went wrong! Be sure to use only numbers in the input field');
    }

    }); //function of quote app
 

}); // Doc Ready 


