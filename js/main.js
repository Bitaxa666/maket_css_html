$(document).ready(function(){

	/*alert('Im working');*/
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
   /*$()*/
   /*DZ - доделать слайдер*/

});