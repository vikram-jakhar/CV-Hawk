let nav = document.querySelector(".nav");
let menubar = document.querySelector(".mobileview");
let loadtake = document.querySelector(".nav-logo")
let finish = document.querySelectorAll(".finish");
let overlay = document.querySelector(".over-layer")
let bgbody = document.querySelector(".bg-bodys");
let span1 = document.querySelector(".span1");
let span2 = document.querySelector(".span2");
let span3 = document.querySelector(".span3");
nav.addEventListener("click", function () {
    menubar.classList.toggle("left-0")
    nav.classList.toggle("nav-bg")
    nav.classList.toggle("nav-2")
    span1.classList.toggle("nav1")
    span2.classList.toggle("nav2")
    span3.classList.toggle("nav3")
    document.body.classList.toggle("overflow-hidden")
    overlay.classList.toggle("left-0")
    bgbody.classList.toggle("over-flow")
})

finish.forEach(e => {
    e.addEventListener("click", function () {
        menubar.classList.remove("left-0")
        span1.classList.toggle("nav1")
        nav.classList.toggle("nav-bg")
        span2.classList.toggle("nav2")
        span3.classList.toggle("nav3")
        bgbody.classList.remove("over-flow")
        overlay.classList.toggle("left-0")
        span2.classList.toggle("nav2")
        span3.classList.toggle("nav3")
        document.body.classList.toggle("overflow-hidden")
    })
});
// preloder
setTimeout(() => {
  document.getElementById("prelod").classList.add("d-none");
  document.body.classList.remove("overflow-hidden");
}, 2000);
// backtotop
function backtop() {
  window.scrollTo(0, 0);
}

window.addEventListener("scroll", function () {
  const mybackto = document.getElementById("backtops");
  if (window.scrollY > 500) {
    mybackto.style.display = "block";
  } else {
    mybackto.style.display = "none";
  }
});
$('.short-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
});