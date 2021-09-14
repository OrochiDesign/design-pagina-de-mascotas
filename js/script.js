$(document).ready(function(){

  $('#search-icon').click(function(){
    $(this).toggleClass('fa-times');
    $('#search-box').toggleClass('active');
  });
    
  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toogle');
  });
    
  $(window).on('scroll load', function(){
    $('#search-icon').removeClass('fa-times');
    $('#search-box').removeClass('active');  
      
    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toogle');
      
    if($(window).scrollTop() > 0){
      $('header').addClass('sticky');
    }else{
      $('header').removeClass('sticky');
    }
  });
    
//    $('a[href*="#"]').on('click',function(e){
//      e.preventDefault();
//
//      $('html, body').animate({
//      scrollTop : $($(this).attr('href')).offset().top,
//      },
//        500,
//        'liner'
//      );
//    });
    
});