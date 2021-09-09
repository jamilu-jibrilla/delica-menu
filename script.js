let menuCont = document.querySelector(".menu-container");
let addToCart = document.querySelectorAll(".cart");
let notif = document.querySelector(".cart-notifs");
let cartIcon = document.querySelector(".cart-list");
let cartNo = document.querySelector(".cart-no");
let body = document.querySelector("body");
let i = 1;

addToCart.forEach((item) => {
  item.addEventListener(
    "click",
    function () {
      item.innerHTML = `<i class="fas fa-check"></i>`;
      setTimeout(() => {
        notif.style.display = "flex";
        cartNo.textContent = i;
        i++;
      }, 50);
      setTimeout(() => {
        notif.style.display = "none";
        cartIcon.style.display = "flex";
      }, 2000);
    },
    { once: true }
  );
});

cartIcon.addEventListener("click", function (e) {
  let div = document.createElement("div");
  e.target.style.cssText +=
    "width:1000px; height: 500px; background-color:black";
  e.target.innerHTML += `          <div class="items-wrapper">
  <div class="menu-item">
    <div class="one">
      <div class="image">
        <img
          src="https://menulingua.s3.amazonaws.com/uploads/food/image/313972/fries-and-sauce-s.jpg"
          alt=""
        />
      </div>
      <div class="desc">
        <h4>Sweet potato fries</h4>
        <p>Crispy on the outside, soft and smooth to the bite</p>
        <div>
          <span><i class="far fa-clock"></i> 10min</span>
          <span><i class="fas fa-weight"></i> 240g</span>
          <span><i class="fas fa-utensils"></i> 1</span>
        </div>
      </div>
    </div>

    <div class="two">
      <div class="cart">
        +
        <h5 class="tooltip">Add to cart</h5>
      </div>
      <div class="price">$100</div>
    </div>
  </div>
</div>
`;
});
let allList = document.getElementsByTagName("a");
