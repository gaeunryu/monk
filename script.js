// Hide the element. Doing this here will prevent the elements from disappering if JS is disabled.
$('.fade-content > *').css({'opacity':'0', 'transform': 'translateY(' + 2 + 'em)'});

// Trigger fade in as window scrolls
$(window).on('scroll load', function(){
  $('.fade-content > *').each( function(i){
    var bottom_of_object = $(this).offset().top + $(this).outerHeight()/8;
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    if( bottom_of_window > bottom_of_object ){  
      $(this).css({'opacity':'1', 'transform': 'translateY(' + 0 + 'em)'});        
    } else {
      $(this).css({'opacity':'0', 'transform': 'translateY(' + 2 + 'em)'});
    }
  });
});