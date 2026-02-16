const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(" body,.navbar-container,.left-menu-icon,.toggle");

ball.addEventListener('click',() =>{
  items.forEach(item => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});