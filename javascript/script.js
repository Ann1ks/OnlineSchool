var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbarScroller").style.top = "0px";
  } else {
    document.getElementById("navbarScroller").style.top = "-250px";
  }
  prevScrollpos = currentScrollPos;
}

$(function()
{
  var expanded = false;
  $('.navbar-toggler').click(function()
                      {
                          if (!expanded)
                          {
                              $('#Greeting').animate({'padding-top' : '11em'}, {duration : 175});
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
});

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
