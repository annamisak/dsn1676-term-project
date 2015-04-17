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
    
    TweenMax.to('.leg-left', 1, {rotation:25, transformOrigin:'50% 0', ease:Linear.easeInOut, repeat:-1});
    
    TweenMax.to('.leg-right', 1, {rotation:18, transformOrigin:'50% 0', ease:Linear.easeInOut, repeat:-1});

    TweenMax.to('.arm-right', 1, {rotation:-60, transformOrigin:'0 50%', ease:Linear.easeInOut, repeat:-1});

    TweenMax.to('.arm-left', 1, {rotation:-40, transformOrigin:'0 50%', ease:Linear.easeInOut, repeat:-1});
    
}, {offset: '40%'});