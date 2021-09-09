let menuCont = document.querySelector(".menu-container");
let addToCart = document.querySelectorAll(".cart");
let notif = document.querySelector(".cart-notifs");

addToCart.forEach((item) => {
  item.addEventListener(
    "click",
    function () {
      item.innerHTML = `<i class="fas fa-check"></i>`;
      setTimeout(() => {
        notif.style.display = "flex";
      }, 50);
      setTimeout(() => {
        notif.style.display = "none";
      }, 2000);
    },
    { once: true }
  );
});

let allList = document.getElementsByTagName("a");
