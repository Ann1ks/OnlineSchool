var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbarScroller").style.top = "0px";
  } else {
    document.getElementById("navbarScroller").style.top = "-250px";
  }
  prevScrollpos = currentScrollPos;
}//скроллинг навбара

$(function()
{
  var expanded = false;
  $('.navbar-toggler').click(function()
                      {
                          if (!expanded)
                          {
                              $('#Greeting').animate({'padding-top' : '11.4em'}, {duration : 175});
                              $('#horNav').animate({'width': '100%'}, {duration: 750});
                              expanded = true;
                          }
                          else
                          {
                             $('#Greeting').animate({'padding-top' : '0em'}, {duration: 275});
                             $('#horNav').animate({'width': '0%'},{duration: 750});
                              expanded = false;
                          }
                      });
});//сдвиг контента вниз по нажатию кнопки меню

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})//открытие модального окна по нажатию на кнопку в навбаре, она будет еще и в другом месте

var typed = new Typed('.banner', {
    strings: ['Креативности', 'Любознательности', 'Гибкости ума'],
    typeSpeed: 80,
    backSpeed: 20,
    backDelay: 1500,
    startDelay: 1000,
    fadeIn: true,
    cursorChar: '_',
    shuffle: true,
    smartBackspace: false,
    loop: true
  });
