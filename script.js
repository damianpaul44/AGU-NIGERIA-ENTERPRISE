// Load Navbar
fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;
  });

// Mobile Menu Toggle
function toggleMenu(){
  var nav = document.getElementById('navLinks');
  if(nav.style.display === 'flex'){
    nav.style.display = 'none';
  } else {
    nav.style.display = 'flex';
  }
}

// Back to Top Button
var mybutton = document.getElementById("backToTop");
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
