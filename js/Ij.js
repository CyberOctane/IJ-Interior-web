/////////// scroll events ///////////

var parallax = document.getElementById('parallax');

window.addEventListener('scroll', ()=>{
    var scrollAmount = window.pageYOffset;
    parallax.style.top = (scrollAmount*0.85) + 'px'
}, false);