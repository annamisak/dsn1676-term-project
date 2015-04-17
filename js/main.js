var $tabs = $('.tabs');
var $panels = $('.panel');

$tabs.on('click', 'a', function (e) {
  e.preventDefault();
  var id = $(this).attr('href');

  $panels.filter(':not([hidden])').attr('hidden', true);
  $(id).removeAttr('hidden');

  $tabs.find('.js-current').removeClass('js-current');
  $(this).addClass('js-current');
});

$('.nav').localScroll();

$('.button').localScroll();

$('.wrapper').localScroll();

$('.social-media').localScroll();

var $bearbody = $('.bearbody');

$bearbody.waypoint(function () {
    $bearbody.addClass('js-active');
}, {offset: '40%'} );

//TweenMax.to(“.animated-rectangle, .animated-outline”, 6, {rotation:360, transformOrigin:”50% 50%”, ease:Linear.easeNone, repeat:-1});

// #leg-left {  
//    transform-origin: center top;
//    animation: leg-left 1s ease alternate infinite;}

//@keyframes leg-left {
//    0% {transform: rotate(0);} 
//    100% {transform: rotate(25deg);}
//}

TweenMax.to(".leg-left", 1, {rotation:25, transformOrigin:"center top", ease:Linear.easeNone, repeat:-1});