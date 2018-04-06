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


});
