// Side navigation animation

const openNav = document.getElementById("open-nav");
const closeNav = document.getElementById("close-nav");
const nav = document.getElementById("side-nav");

openNav.addEventListener("click", () => {
  nav.classList.toggle("visible");
  nav.ariaHidden = "false";
  nav.ariaExpanded = "true";
});

closeNav.addEventListener("click", () => {
  nav.classList.toggle("hidden");
  nav.ariaHidden = "true";
  nav.ariaExpanded = "false";
  setTimeout(function () {
    nav.classList.toggle("hidden");
    nav.classList.toggle("visible");
  }, 500);
});

// Adjusting css styles on load and screen size change

window.onload = function () {
  const w = window.innerWidth;
  if (w <= 880) {
    nav.classList.add("side-nav");
    nav.classList.remove("desktop-only");
    closeNav.tabIndex = "0";
  } else {
    nav.classList.remove("side-nav");
    nav.ariaHidden = "false";
    nav.ariaExpanded = "";
    openNav.ariaHidden = "true";
  }
};

window.addEventListener("resize", resetStyleOnWindowSize);

function resetStyleOnWindowSize() {
  const w = window.innerWidth;
  if (w >= 880) {
    nav.classList.add("desktop-only");
    nav.classList.remove("side-nav");
    nav.ariaHidden = "false";
    nav.ariaExpanded = "";
    openNav.ariaHidden = "true";
    closeNav.tabIndex = "0";
  } else {
    nav.classList.remove("desktop-only");
    nav.classList.add("side-nav");
    nav.classList.add("side-nav");
    nav.classList.remove("desktop-only");
    openNav.ariaHidden = "false";
  }
}

// Basket animation

const basketToggle = document.getElementById("basket-btn");
const basket = document.querySelector(".modal-basket");

basketToggle.addEventListener("click", basketAnimation);

function basketAnimation() {
  const isVisible = basket.classList.toggle("visible");
  basket.setAttribute("aria-expanded", isVisible ? "true" : "false");
  basket.setAttribute("aria-hidden", isVisible ? "false" : "true");
}

// Lightbox animation

const imgToggle = document.getElementById("item-img");
const imgModalToggle = document.getElementById("close-img-modal");
const imgPreview = document.querySelector(".modal-lightbox");

imgToggle.addEventListener("click", () => {
  const w = window.innerWidth;
  if (w >= 880) {
    imgPreview.classList.add("visible");
    imgPreview.ariaHidden = "false";
    imgPreview.ariaExpanded = "true";
  } else {
    console.log("Error! Lightbox modal can only be displayed at desktop");
  }
});

imgModalToggle.addEventListener("click", () => {
  const w = window.innerWidth;
  if (w >= 880) {
    imgPreview.classList.remove("visible");
    imgPreview.ariaHidden = "true";
    imgPreview.ariaExpanded = "false";
  } else {
    console.log("Error! Lightbox modal can only be displayed at desktop");
  }
});

// Handle thumbnail clicks

const itemImg = document.getElementById("item-img");
const itemImgModal = document.getElementById("item-img-modal");
const radios = document.querySelectorAll("input");
const path = "./assets/images/";
const progressBar = document.querySelector("progress");

radios.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.name === "product-thumbnail-img") {
      itemImg.src = `${path}${item.id}.jpg`;
      progressBar.value = item.id.slice(14);
    } else if (item.name === "product-thumbnail-img-modal") {
      itemImgModal.src = `${path}${item.id.slice(6)}.jpg`;
    }
  });
});

// Handle arrow clicks

const buttons = document.querySelectorAll("button");
let x = 1;
const maxX = 4;
const minX = 1;

const quantity = document.getElementById("number-of-items");
let y = 0;
const minY = 0;

function updateImage(imgElement, x) {
  imgElement.src = `./assets/images/image-product-${x}.jpg`;
}

function changeX(direction) {
  if (direction === "increase") {
    x = x < maxX ? x + 1 : minX;
  } else {
    x = x > minX ? x - 1 : maxX;
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Image preview buttons
    switch (button.id) {
      case "prev-btn":
        changeX("decrease");
        updateImage(itemImg, x);
        progressBar.value = x;
        break;
      case "modal-prev-btn":
        changeX("decrease");
        updateImage(itemImgModal, x);
        break;
      case "next-btn":
        changeX("increase");
        updateImage(itemImg, x);
        progressBar.value = x;
        break;
      case "modal-next-btn":
        changeX("increase");
        updateImage(itemImgModal, x);
        break;
      // Shopping buttons
      case "decrease-btn":
        y = y > minY ? y - 1 : minY;
        quantity.value = y;
        break;
      case "increase-btn":
        y++;
        quantity.value = y;
        break;
    }
  });
});

// Form

const form = document.getElementById("form");

const itemsOnCart = document.getElementById("basket-count");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const isCartOpen = basket.classList.contains("visible");

  itemsOnCart.style.display = "block";
  itemsOnCart.innerHTML = y;
  y > 0 ? appendItem(y) : console.log("Error! Must add item first");

  if (!isCartOpen) {
    setTimeout(function () {
      basketAnimation();
      basket.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 500);
  } else {
    console.log("Basket is already open");
  }
});

// Basket Add/Delete/Buy actions

const container = document.getElementById("basket-filled");

const appendItem = (itemCount) => {
  const item = `

        <div class="added-items" style="justify-content: space-between;">

      <img
        src="./assets/images/image-product-1-thumbnail.jpg"
        alt=""
        width="44"
        height="44"
      />
      <div class="flex">
        <p>Fall Limited Edition Sneakers</p>
        <dl class="basket-price flex">
          <dt class="sr-only">Current price multiplied by quantity:</dt>
          <dd>$125.00 x <span>${itemCount}</span></dd>
          <dt class="sr-only">Total price:</dt>
          <dd class="total-price">$${125 * itemCount}.00</dd>
        </dl>
      </div>
      <button id="delete-btn">
        <img
          src="./assets/images/icon-delete.svg"
          alt="Delete items from basket"
          width="14"
          height="16"
        />
      </button>
      </div>
         <div class="checkout">
        <button id="checkout-btn">Checkout</button>
      </div> 
  `;

  container.innerHTML = item;

  const deleteBtn = document.getElementById("delete-btn");
  const checkoutBtn = document.getElementById("checkout-btn");

  deleteBtn.addEventListener("click", () => {
    container.innerHTML = `    
    <div  class="added-items">
    <p>Your cart is empty</p>
    </div>`;
    itemsOnCart.style.display = "none";
    itemsOnCart.innerHTML = "";
    setTimeout(function () {
      basketAnimation();
    }, 500);
  });

  checkoutBtn.addEventListener("click", () => {
    container.innerHTML = `    
    <div class="success-box added-items"> 
    <p class="success-text">Thank you for shopping with us</p>
</div>`;
    itemsOnCart.style.display = "none";
    itemsOnCart.innerHTML = "";
    setTimeout(function () {
      basketAnimation();
    }, 500);
  });
};
