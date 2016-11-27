/**
* Transição simples de imagens
* Simple image transition
* @2016 - Gutemberg Dantas
*/
function loadImage(img) {
    "use strict";

    var DIR_IMG = 'images/';

    var images = Array();
        images[0] = '00.jpg';
        images[1] = '01.jpg';
        images[2] = '02.jpg';
        images[3] = '03.jpg';
        images[4] = '04.jpg';

    var img_src = DIR_IMG + images[img];

    $('.slide-main-img').fadeOut(400, function () {
        $(this).find('img').attr('src', img_src);
    }).fadeIn(400);
    
    return images.length;
}

$(document).ready(function(){
    
    var img = 1;
    var total = 0;

    var timer = window.setInterval(function () {
        total = loadImage(img);
        img = (img < (total - 1)) ? img + 1 : 0;
    }, 5000);

});
