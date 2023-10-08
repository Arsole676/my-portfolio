import './style.scss';
import './theme.scss';
import './resize.scss';

var element = document.getElementById("myNav");

function myFunction() {
  if (document.documentElement.scrollTop > 56) {
    element.className = "appear";
    element.classList.remove("nonee");
  } else {
    element.className = "nonee";
  }
}

window.onscroll = function() {myFunction()};