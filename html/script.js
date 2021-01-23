var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbarAnim").style.top = "0";
  } else {
    document.getElementById("navbarAnim").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}

$(function()
{
  var expanded = false;
  $('#hui').click(function()
                      {
                          if (!expanded)
                          {
                              $('#firstBlock').animate({'padding-top' : '9em'}, {duration : 175});
                              expanded = true;
                          }
                          else
                          {
                             $('#firstBlock').animate({'padding-top' : '4em'}, {duration: 275});
                              expanded = false;
                          }
                      });
});

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
