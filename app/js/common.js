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