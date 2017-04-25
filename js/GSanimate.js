(function($) {

  TweenMax.to($('#myPicture'), 6, {ease:Bounce.easeOut, rotationY:360, transformPerspective:1600, transformOrigin:"50% 50%"});

  $('.hoverShadow').hover(function(){
    TweenMax.to($(this), 0.5, {opacity:.5, textShadow:"0px 0px 2px #FAFAFA"});
    TweenMax.to($(this), 0.5, {opacity:1, textShadow:"0px 0px 0px #FAFAFA", delay:0.5});
  });

})(jQuery);