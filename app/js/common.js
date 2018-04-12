$(function() {
    //meny mobile
    $(".toggle-mnu").click(function() {
        $(this).toggleClass("on");
        $(".main-mnu").slideToggle();
        // return false;
    });

    //video controlls
    $('.video-controll').hover(function(){

        $(this).attr("controls", "controls");

    },
        function () {
            $(this).removeAttr("controls");
        }
        );

//========= modal ==============

    var modal = document.getElementById('myModal');

// Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }
    btn2.onclick = function() {
        modal.style.display = "block";
    }

// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

//============ finish modal ===============




});

// Slick slider
(function($) {
    $('.variable-width').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000
    });
})(jQuery);
// finish Slick slider