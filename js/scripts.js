console.log("Hi, welcome to my portfolio!")

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
if (x.className === 'navtoggle') {
  x.className += ' responsive'; // changes class of object based on whether it's already shown or not (if menu open, click will close, vice versa)
  } else {
    x.className = 'navtoggle';
      }
}
