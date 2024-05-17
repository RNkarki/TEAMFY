const header = document.querySelector("header");
const menuToggler = document.querySelectorAll("#menu_toggle");

menuToggler.forEach(toggler => {
  toggler.addEventListener("click", () => header.classList.toggle("showMenu"));
});

window.addEventListener('scroll', reveal);

function reveal() {
  let reveals = document.querySelectorAll('.reveal')

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
     //let revealPoint = 50;

    if (revealTop < windowHeight) {
      reveals[i].classList.add('active')
    } else {
      reveals[i].classList.remove('active')
    }
  }
}
