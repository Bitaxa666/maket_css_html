/*$(document).ready(function(){

	/*alert('Im working');
   // jQuery methods go here...


   const slides = $('.header_slider.one');

   $('.header_slider').each(function(index) {
   	  const btn = $(this).find(".next_img_show");
   	  const next = slides.next();
   	  const active = $(this);
   	  const prev = slides.prev();

   	  console.log(next, active, prev)
   	   btn.on('click', function() {
   	   		active.hide();
   	   		next.show();
   	   		//slides[index+1].show();

   	   });

   });  

});
*/
var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var slideInterval = 3000;
var navBtnId = 0;
var translateWidth = 0;

$(document).ready(function() {
    var switchInterval = setInterval(nextSlide, slideInterval);

    $('#viewport').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });

    $('#next-btn').click(function() {
        nextSlide();
    });

    $('#prev-btn').click(function() {
        prevSlide();
    });
    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#slider').css({ width: slideWidth, height: slideHeight });

    //$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 500, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 500, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });


    /*как сделать что бы только во время прокрутки к этой части начинало анимироватся? - метод draw()?*/
    //Loader
    $('#70').ClassyLoader({
        width: 200, // width of the loader in pixels
        height: 200, // height of the loader in pixels
        animate: true, // whether to animate the loader or not
        displayOnLoad: true,
        percentage: 70,
        speed: 13, // miliseconds between animation cycles, lower value is faster
        roundedLine: false, // whether the line is rounded, in pixels
        showRemaining: true, // how the remaining percentage (100% - percentage)
        fontFamily: 'Lato', // name of the font for the percentage
        fontSize: '40px', // size of the percentage font, in pixels
        fontWeight: '500',
        showText: true, // whether to display the percentage text
        diameter: 80, // diameter of the circle, in pixels
        fontColor: 'rgba(255,0,54, 0.9)', // color of the font in the center of the loader, any CSS color would work, hex, rgb, rgba, hsl, hsla
        lineColor: '#e74c3c', // line color of the main circle
        remainingLineColor: 'rgba(55, 55, 55, 0.4)', // line color of the remaining percentage (if showRemaining is true)
        lineWidth: 3 // the width of the circle line in pixels
    });
    $('#80').ClassyLoader({
        width: 200, // width of the loader in pixels
        height: 200, // height of the loader in pixels
        animate: true, // whether to animate the loader or not
        displayOnLoad: true,
        percentage: 80,
        speed: 13, // miliseconds between animation cycles, lower value is faster
        roundedLine: false, // whether the line is rounded, in pixels
        showRemaining: true, // how the remaining percentage (100% - percentage)
        fontFamily: 'Lato', // name of the font for the percentage
        fontSize: '40px', // size of the percentage font, in pixels
        fontWeight: '500',
        showText: true, // whether to display the percentage text
        diameter: 80, // diameter of the circle, in pixels
        fontColor: 'rgba(255,0,54, 0.9)', // color of the font in the center of the loader, any CSS color would work, hex, rgb, rgba, hsl, hsla
        lineColor: '#e74c3c', // line color of the main circle
        remainingLineColor: 'rgba(55, 55, 55, 0.4)', // line color of the remaining percentage (if showRemaining is true)
        lineWidth: 3 // the width of the circle line in pixels
    });
    $('#90').ClassyLoader({
        width: 200, // width of the loader in pixels
        height: 200, // height of the loader in pixels
        animate: true, // whether to animate the loader or not
        displayOnLoad: true,
        percentage: 90,
        speed: 13, // miliseconds between animation cycles, lower value is faster
        roundedLine: false, // whether the line is rounded, in pixels
        showRemaining: true, // how the remaining percentage (100% - percentage)
        fontFamily: 'Lato', // name of the font for the percentage
        fontSize: '40px', // size of the percentage font, in pixels
        fontWeight: '500',
        showText: true, // whether to display the percentage text
        diameter: 80, // diameter of the circle, in pixels
        fontColor: 'rgba(255,0,54, 0.9)', // color of the font in the center of the loader, any CSS color would work, hex, rgb, rgba, hsl, hsla
        lineColor: '#e74c3c', // line color of the main circle
        remainingLineColor: 'rgba(55, 55, 55, 0.4)', // line color of the remaining percentage (if showRemaining is true)
        lineWidth: 3 // the width of the circle line in pixels
    });
    $('#98').ClassyLoader({
        width: 200, // width of the loader in pixels
        height: 200, // height of the loader in pixels
        animate: true, // whether to animate the loader or not
        displayOnLoad: true,
        percentage: 98,
        speed: 13, // miliseconds between animation cycles, lower value is faster
        roundedLine: false, // whether the line is rounded, in pixels
        showRemaining: true, // how the remaining percentage (100% - percentage)
        fontFamily: 'Lato', // name of the font for the percentage
        fontSize: '40px', // size of the percentage font, in pixels
        fontWeight: '500',
        showText: true, // whether to display the percentage text
        diameter: 80, // diameter of the circle, in pixels
        fontColor: 'rgba(255,0,54, 0.9)', // color of the font in the center of the loader, any CSS color would work, hex, rgb, rgba, hsl, hsla
        lineColor: '#e74c3c', // line color of the main circle
        remainingLineColor: 'rgba(55, 55, 55, 0.4)', // line color of the remaining percentage (if showRemaining is true)
        lineWidth: 3 // the width of the circle line in pixels
    });


});

function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}