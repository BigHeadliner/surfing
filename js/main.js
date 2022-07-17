$(function(){  
   
  $(document).ready(function(){
    $(".menu a ").on("click", function (event) {
      //відміняєм стандартне опрацювання натиску ссилки
      event.preventDefault();
       
      //забираєм ідентифікатор блоку з атрибута href 
      var id  = $(this).attr('href'),
  
      //дізнаємся висоту від початку сторінки до блоку на який ссилається якір
        top = $(id).offset().top;
      
      //анімуєм перехід на відстань - top за 1500 мс
      $('body,html').animate({scrollTop: top}, 1500);
    });
  });

   
  $('.slider-blog__inner').slick({ 
     arrows: false,  
     dots: true, 
     
  });
    
  $('.menu__btn').on('click', function(){ 
    $('.menu__list').toggleClass('menu__list--active');
  }) 

  var mixer = mixitup('.portfolio__content'); 
   
});