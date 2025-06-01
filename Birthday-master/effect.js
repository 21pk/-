$(window).load(function(){
    // --- Countdown Logic Start ---
    // IMPORTANT: SET HER ACTUAL BIRTHDAY DATE AND TIME HERE for deployment
    // For testing, setting to June 2nd, 2025, 12:00:00 AM (midnight IST)
    // To test the countdown, set this to a time a few minutes/seconds in the future.
    // To test the post-countdown state, set this to a time in the past.
    const birthdayDate = new Date('June 1, 2025 00:00:00'); // <--- CHANGE THIS FOR ACTUAL BIRTHDAY!

    const daysValue = $('#days-value');
    const hoursValue = $('#hours-value');
    const minutesValue = $('#minutes-value');
    const secondsValue = $('#seconds-value');
    const countdownContainer = $('#countdown-container');
    const body = $('body');

    // Function to add leading zero if number is less than 10
    function formatTime(unit) {
        return unit < 10 ? '0' + unit : unit;
    }

    // Function to update the countdown
    function updateCountdown() {
        const currentTime = new Date().getTime();
        const distance = birthdayDate.getTime() - currentTime;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance < 0) {
            // If the countdown is over, reveal the content
            clearInterval(countdownInterval); // Stop the countdown from updating
            countdownContainer.fadeOut('slow', function() { // Fade out the countdown div
                body.removeClass('hide-content'); // Remove the hiding class from body
                // The original .loading fadeOut is now handled here for immediate reveal
                $('.loading').fadeOut('fast', function() { // Fade out any existing loading overlay
                    $('.container').fadeIn('fast', function() { // Fade in the main content container
                        // Automatically trigger "Turn On Lights" after main content fades in
                        $('#turn_on').click(); // Auto-start the sequence!
                    });
                });
            });
        } else {
            // Otherwise, display the countdown
            daysValue.text(formatTime(days));
            hoursValue.text(formatTime(hours));
            minutesValue.text(formatTime(minutes));
            secondsValue.text(formatTime(seconds));
        }
    }

    // Initial check and display/transition on page load
    // This handles both showing the countdown if it's in the future,
    // or immediately starting the animation if the date has passed.
    if (new Date().getTime() >= birthdayDate.getTime()) {
        // If the birthday has already passed, skip countdown entirely
        countdownContainer.hide(); // Hide countdown instantly
        body.removeClass('hide-content'); // Reveal content
        $('.loading').fadeOut('fast', function() {
            $('.container').fadeIn('fast', function() {
                $('#turn_on').click(); // Auto-click "Turn On Lights"
            });
        });
    } else {
        // If birthday is in the future, start the countdown
        updateCountdown(); // Call once immediately to show initial values
        const countdownInterval = setInterval(updateCountdown, 1000); // Then update every second
    }
    // --- Countdown Logic End ---
});

$('document').ready(function(){

    // CONTROL ANIMATION AND DELAY SPEED FROM HERE
    // Higher value = slower animation/delay
    // Lower value = faster animation/delay
    var animationSpeed = 500; // Default speed in milliseconds (e.g., 500ms)
    // You can adjust this value to make the whole animation sequence faster or slower.

        var vw;
        $(window).resize(function(){
            vw = $(window).width()/2;
            $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
            $('#b11').animate({top:240, left: vw-350}, animationSpeed / 3);
            $('#b22').animate({top:240, left: vw-250}, animationSpeed / 3);
            $('#b33').animate({top:240, left: vw-150}, animationSpeed / 3);
            $('#b44').animate({top:240, left: vw-50}, animationSpeed / 3);
            $('#b55').animate({top:240, left: vw+50}, animationSpeed / 3);
            $('#b66').animate({top:240, left: vw+150}, animationSpeed / 3);
            $('#b77').animate({top:240, left: vw+250}, animationSpeed / 3);
        });

    $('#turn_on').click(function(){
        $('#bulb_yellow').addClass('bulb-glow-yellow');
        $('#bulb_red').addClass('bulb-glow-red');
        $('#bulb_blue').addClass('bulb-glow-blue');
        $('#bulb_green').addClass('bulb-glow-green');
        $('#bulb_pink').addClass('bulb-glow-pink');
        $('#bulb_orange').addClass('bulb-glow-orange');
        $('body').addClass('peach');
        $(this).fadeOut('slow').delay(animationSpeed * 1.5).promise().done(function(){
            $('#play').fadeIn('fast');
        });
    });

    $('#play').click(function(){
        var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
        $('#bulb_red').addClass('bulb-glow-red-after');
        $('#bulb_blue').addClass('bulb-glow-blue-after');
        $('#bulb_green').addClass('bulb-glow-green-after');
        $('#bulb_pink').addClass('bulb-glow-pink-after');
        $('#bulb_orange').addClass('bulb-glow-orange-after');
        $('body').css('background-color','#FFF'); // Corrected typo: 'backgroud-color' to 'background-color'
        $('body').addClass('peach-after');
        $(this).fadeOut('slow').delay(animationSpeed * 2).promise().done(function(){
            $('#bannar_coming').fadeIn('fast');
        });
    });

    $('#bannar_coming').click(function(){
        $('.bannar').addClass('bannar-come');
        $(this).fadeOut('slow').delay(animationSpeed * 2).promise().done(function(){
            $('#balloons_flying').fadeIn('fast');
        });
    });

    function loopOne() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b1').animate({left:randleft,bottom:randtop}, animationSpeed * 6,function(){
            loopOne();
        });
    }
    function loopTwo() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b2').animate({left:randleft,bottom:randtop}, animationSpeed * 6,function(){
            loopTwo();
        });
    }
    function loopThree() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b3').animate({left:randleft,bottom:randtop}, animationSpeed * 6,function(){
            loopThree();
        });
    }
    function loopFour() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b4').animate({left:randleft,bottom:randtop}, animationSpeed * 6,function(){
            loopFour();
        });
    }
    function loopFive() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b5').animate({left:randleft,bottom:randtop}, animationSpeed * 6,function(){
            loopFive();
        });
    }

    function loopSix() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b6').animate({left:randleft,bottom:randtop}, animationSpeed * 6,function(){
            loopSix();
        });
    }
    function loopSeven() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b7').animate({left:randleft,bottom:randtop}, animationSpeed * 6,function(){
            loopSeven();
        });
    }

    $('#balloons_flying').click(function(){
        $('.balloon-border').animate({top:-500}, animationSpeed * 4);
        $('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
        $('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
        loopOne();
        loopTwo();
        loopThree();
        loopFour();
        loopFive();
        loopSix();
        loopSeven();

        $(this).fadeOut('slow').delay(animationSpeed * 1.5).promise().done(function(){
            $('#cake_fadein').fadeIn('fast');
        });
    });

    $('#cake_fadein').click(function(){
        $('.cake').fadeIn('fast');
        $(this).fadeOut('slow').delay(animationSpeed / 5).promise().done(function(){
            $('#light_candle').fadeIn('fast');
        });
    });

    $('#light_candle').click(function(){
        $('.fuego').fadeIn('fast');
        $(this).fadeOut('slow').promise().done(function(){
            $('#wish_message').fadeIn('fast');
        });
    });

    $('#wish_message').click(function(){
          vw = $(window).width()/2;

        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
        $('#b1').attr('id','b11');
        $('#b2').attr('id','b22')
        $('#b3').attr('id','b33')
        $('#b4').attr('id','b44')
        $('#b5').attr('id','b55')
        $('#b6').attr('id','b66')
        $('#b7').attr('id','b77')
        $('#b11').animate({top:240, left: vw-350}, animationSpeed / 3);
        $('#b22').animate({top:240, left: vw-250}, animationSpeed / 3);
        $('#b33').animate({top:240, left: vw-150}, animationSpeed / 3);
        $('#b44').animate({top:240, left: vw-50}, animationSpeed / 3);
        $('#b55').animate({top:240, left: vw+50}, animationSpeed / 3);
        $('#b66').animate({top:240, left: vw+150}, animationSpeed / 3);
        $('#b77').animate({top:240, left: vw+250}, animationSpeed / 3);
        $('.balloons').css('opacity','0.9');
        $('.balloons h2').fadeIn(animationSpeed / 2);
        $(this).fadeOut('slow').delay(animationSpeed * 1.5).promise().done(function(){
            $('#story').fadeIn('fast');
        });
    });

    $('#story').click(function(){
        $(this).fadeOut('slow');
        $('.cake').fadeOut('fast').promise().done(function(){
            $('.message').fadeIn('fast');
        });

      var i = 0; // Initialize i to 0. (For nth-child, it's 1-indexed, so we use i+1)

      function msgLoop (index) {
          let totalParagraphs = $('.message p').length;

          // Check if the current 'index' is within the bounds of existing paragraphs
          if(index < totalParagraphs){
              // Fade out the current paragraph (if it exists)
              // Use index+1 for nth-child as it's 1-based
              $("p:nth-child("+(index+1)+")").fadeOut('fast').delay(animationSpeed / 3).promise().done(function(){
                  // If there's a next paragraph, fade it in
                  if((index + 1) < totalParagraphs){
                      $("p:nth-child("+(index+2)+")").fadeIn('fast').delay(animationSpeed * 1.5);
                      msgLoop(index + 1); // Continue to the next message
                  } else {
                      // This block executes when the LAST message has completely faded out.
                      $('.cake').fadeIn('fast'); // Your original cake fade-in
                      $('#surprise_trigger_button').fadeIn('slow'); // REVEAL THE TRIGGER BUTTON HERE
                  }
              });
          } else {
              // This is a safety net in case msgLoop is called with an initial index that's out of bounds
              // Or if there are no paragraphs, just show the cake and button.
              $('.cake').fadeIn('fast');
              $('#surprise_trigger_button').fadeIn('slow');
          }
      }

        msgLoop(0); // Start the message loop from the first paragraph (index 0)

    });
});
