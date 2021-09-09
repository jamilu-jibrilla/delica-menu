let ContainerDiv = document.createElement("div");
let header = document.querySelector("header");
let menuCont = document.querySelector(".menu-container");
let addToCart = document.querySelectorAll(".cart");
let notif = document.querySelector(".cart-notifs");
let cartIcon = document.querySelector(".cart-list");
let cartNo = document.querySelector(".cart-no");
let body = document.querySelector("body");
let bb = document.querySelector(".cc");
let cc = [];

let i = 1;
console.log(cc);
addToCart.forEach((item) => {
  item.addEventListener(
    "click",
    function (e) {
      let getData = [
        [
          e.target.parentElement.parentElement.firstElementChild
            .lastElementChild.firstElementChild.textContent,
        ],
        [
          e.target.parentElement.parentElement.firstElementChild
            .lastElementChild.firstElementChild.nextElementSibling.textContent,
        ],
        [
          e.target.parentElement.parentElement.firstElementChild
            .firstElementChild.firstElementChild.src,
        ],
      ];

      console.log(
        e.target.parentElement.parentElement.firstElementChild.lastElementChild
          .firstElementChild.nextElementSibling.textContent
      );
      cc.push(getData);

      item.innerHTML = `<i class="fas fa-check"></i>`;
      setTimeout(() => {
        notif.style.display = "flex";
        cartNo.textContent = i;
        localStorage.setItem("getItem", JSON.stringify(cc));
        i++;
      }, 50);
      setTimeout(() => {
        notif.style.display = "none";
        cartIcon.style.display = "flex";
      }, 1500);
    },
    { once: true }
  );
});

cartIcon.addEventListener("click", function (e) {
  document.querySelector("nav").style.display = "none";
  header.style.display = "none";
  body.style.backgroundColor = "rgb(244, 244, 244)";
  cartIcon.style.display = "none";
  bb.style.backgroundColor = "rgb(244, 244, 244)";
  menuCont.style.display = "none";
  bb.innerHTML = "<h1>Your Order</h1>";
  cc.forEach((item) => {
    bb.innerHTML += `
    <div class="cart-details">
    
      <div class="img">
      <img src="${item[2][0]}"  alt="" />
      </div>

      <div details-text>
        <h1>
        ${item[0][0]}
        </h1>
        <p>
        ${item[1][0]}
        </p>
      </div>
    
    </div>`;
  });
  bb.innerHTML += `<button class="orderbtn">submit</button>`;

  bb.style.display = "flex";
  document.querySelector(".orderbtn").addEventListener("click", function () {
    bb.style.display = "none";
    header.style.display = "flex";
    cartIcon.style.display = "flex";
    menuCont.style.display = "flex";
  });
});
let allList = document.getElementsByTagName("a");
