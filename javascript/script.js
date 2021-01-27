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
