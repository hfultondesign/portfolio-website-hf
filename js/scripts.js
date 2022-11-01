console.log("Hi, welcome to my portfolio!");

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
if (x.className === 'navtoggle') {
  x.className += ' responsive'; // changes class of object based on whether it's already shown or not (if menu open, click will close, vice versa)
  } else {
    x.className = 'navtoggle';
      }
}

$('#click_advance').click(function() {
    $('#display_advance').toggle('1000');
    $("i", this).toggleClass("fas fa-bars fas fa-x");
});
