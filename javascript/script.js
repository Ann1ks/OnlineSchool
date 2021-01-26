window.addEventListener('scroll', function () {
            let header = document.querySelector('nav');
            let windowPosition = window.scrollY > 0;
            header.classList.toggle('scrolling-active', windowPosition);
        });


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
