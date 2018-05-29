$(function() {
    //meny mobile
    $(".toggle-mnu").click(function() {
        $(this).toggleClass("on");
        $(".main-mnu").slideToggle();
        // return false;
    });

    // video controlls
    $('.video-controll').hover(
        function(){

        $(this).attr("controls", "controls");

        },
        function () {
            $(this).removeAttr("controls");
        }
        );



//===================================
//     var videoPlayer = document.getElementById('videoPlayer');
// // console.log(videoPlayer);
// // console.log(111);
//     // Auto play, half volume.
//     // videoPlayer.play()
//     // videoPlayer.volume = 0.5;
// if (videoPlayer !== null){
//     // Play / pause.
//     videoPlayer.addEventListener('click', function () {
//         if (videoPlayer.paused == false) {
//             videoPlayer.pause();
//             videoPlayer.firstChild.nodeValue = 'Play';
//         } else {
//             videoPlayer.play();
//             videoPlayer.firstChild.nodeValue = 'Pause';
//         }
//     });
// }


//========= modal ==============

    var modal = document.getElementById('myModal');

// Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    var btn2 = document.getElementById("myBtn2");

    var btn3 = document.getElementsByClassName("myBtns")[0];
    var btn31 = document.getElementsByClassName("myBtns")[1];
    var btn4 = document.getElementsByClassName("myBtns")[2];
    var btn41 = document.getElementsByClassName("myBtns")[3];
    var btn5 = document.getElementsByClassName("myBtns")[4];
    var btn51 = document.getElementsByClassName("myBtns")[5];
    var btn6 = document.getElementsByClassName("myBtns")[6];
    var btn61 = document.getElementsByClassName("myBtns")[7];
    var btn7 = document.getElementsByClassName("myBtns")[8];
    var btn71 = document.getElementsByClassName("myBtns")[9];

    // var btn8 = document.getElementsByClassName("myBtns")[10];
    // var btn9 = document.getElementsByClassName("myBtns")[11];
    // var btn10 = document.getElementsByClassName("myBtns")[12];
    // var btn11 = document.getElementsByClassName("myBtns")[13];


// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
    btn.onclick = function(e) {
        e.preventDefault();
        modal.style.display = "block";
    };
    btn2.onclick = function(e) {
        e.preventDefault();
        modal.style.display = "block";
    };









// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    };

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };


    btn3.onclick = function(e) {
        e.preventDefault();
        modal.style.display = "block";
    };
    btn31.onclick = function(e) {
        e.preventDefault();
        modal.style.display = "block";
    };
    btn4.onclick = function(e) {
        e.preventDefault();
        modal.style.display = "block";
    };
    btn41.onclick = function(e) {
        e.preventDefault();
        modal.style.display = "block";
    };
    btn5.onclick = function(e) {
        e.preventDefault();
        modal.style.display = "block";
    };
    btn51.onclick = function(e) {
        e.preventDefault();
        modal.style.display = "block";
    };
    btn6.onclick = function(e) {
        e.preventDefault();
        modal.style.display = "block";
    };
    btn61.onclick = function(e) {
        e.preventDefault();
        modal.style.display = "block";
    };
    btn7.onclick = function(e) {
        e.preventDefault();
        modal.style.display = "block";
    };
    btn71.onclick = function(e) {
        e.preventDefault();
        modal.style.display = "block";
    };

    // btn8.onclick = function() {
    //     modal.style.display = "block";
    // };
    // btn9.onclick = function() {
    //     modal.style.display = "block";
    // };
    // btn10.onclick = function() {
    //     modal.style.display = "block";
    // };
    // btn11.onclick = function() {
    //     modal.style.display = "block";
    // };
//============ finish modal ===============




    // $("form").submit(function(e) {
    //
    //     var ref = $(this).find("[required]");
    //
    //     $(ref).each(function(){
    //         if ( $(this).val() == '' )
    //         {
    //             alert("Required field should not be blank.");
    //
    //             $(this).focus();
    //
    //             e.preventDefault();
    //             return false;
    //         }
    //     });  return true;
    // });


//    dubli click dutton











});


//duble click on submit button
// $( ".btn" ).click(function() {
//     // alert(111);
//
//     setTimeout(mysettime1, 5);
//     $(this).submit();
//
//     setTimeout(mysettime2, 3000);
// });
// function mysettime1() {
//     // $(".btn").show();
//     $(".btn").attr('disabled','disabled');
// }
// function mysettime2() {
//     // $(".btn").show();
//     $(".btn").removeAttr('disabled');
// }








// $('.btn').on('click', function (e) {
//     alert(111);
// })




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


//================================================= float static ellement===============================================================
(function(){  // анонимная функция (function(){ })(), чтобы переменные "a" и "b" не стали глобальными
    var a = document.querySelector('#form-scrol'), b = null;  // селектор блока, который нужно закрепить
    window.addEventListener('scroll', Ascroll, false);
    document.body.addEventListener('scroll', Ascroll, false);  // если у html и body высота равна 100%
    function Ascroll() {
        if (b == null) {  // добавить потомка-обёртку, чтобы убрать зависимость с соседями
            var Sa = getComputedStyle(a, ''), s = '';
            for (var i = 0; i < Sa.length; i++) {  // перечислить стили CSS, которые нужно скопировать с родителя
                if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
                    s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
                }
            }
            b = document.createElement('div');  // создать потомка
            b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
            a.insertBefore(b, a.firstChild);  // поместить потомка в цепляющийся блок первым
            var l = a.childNodes.length;
            for (var i = 1; i < l; i++) {  // переместить во вновь созданного потомка всех остальных потомков (итого: создан потомок-обёртка, внутри которого по прежнему работают скрипты)
                b.appendChild(a.childNodes[1]);
            }
            a.style.height = b.getBoundingClientRect().height + 'px';  // если под скользящим элементом есть другие блоки, можно своё значение
            a.style.padding = '0';
            a.style.border = '0';  // если элементу присвоен padding или border
        }
        if (a.getBoundingClientRect().top <= 0) { // elem.getBoundingClientRect() возвращает в px координаты элемента относительно верхнего левого угла области просмотра окна браузера
            b.className = 'sticky';
        } else {
            b.className = '';
        }
        window.addEventListener('resize', function() {
            a.children[0].style.width = getComputedStyle(a, '').width
        }, false);  // если изменить размер окна браузера, измениться ширина элемента
    }
})();
//==================================================================================================================

//=============================scroll on form=============================
$(function() {

    $(document).ready(function(){
        $(".button-mobile").on("click","a", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();

            //забираем идентификатор бока с атрибута href
            var id  = $(this).attr('href'),

                //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;

            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 500);
        });
    });

});

//====================================================================