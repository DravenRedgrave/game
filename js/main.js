$(document).ready(function(){
  $('.slider').slick({
    slidesToShow:1,
    infinite:true,
    autoplay:true,
    pauseOnFocus:true,
    pauseOnHover:true,
    swipe:true,
    TouchMove:true,
    arrows:false,
    WariableWidth:true,
    responsive:[
      {
        breakpoint: 768,
        settings:{
          slidesToShow:1,
        }
      }, {
        breakpoint: 922,
        settings:{
          slidesToShow:1
        }
      }, {
        breakpoint: 480,
        settings:{
          slidesToShow:1
        }
      }
    ]
  });
});

const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  menuToggle.addEventListener('click', () => {
      if (nav.className != 'active') {nav.className = 'active';}
      else {nav.className = '';}
  });

$(window).on("scroll",function(){
  if($(window).scrollTop()){
    $('header').addClass('black');
  }
  else {
    $('header').removeClass('black');
  }
})

$(document).ready(function() {
  $('.list').click(function(){
    const  value = $(this).attr('data-filter');
    if (value=='all') {
      $('.itemBox').show('1000');
    }
    else {
      $('.itemBox').not('.' + value).hide(1000);
      $('.itemBox').filter('.' + value).show(1000);
    }
  })
  $('.list').click(function(){
    $(this).addClass('.active')
  })
})


$(document).ready(function() {
  $('.spoiler-title').click(function(event) {
    if($('.spoiler').hasClass('one')){
      $('.spoiler-title').not($(this)).removeClass('active');
      $('.spoiler-text').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  })
})
