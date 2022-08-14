//side navbar

const iconOpen = document.querySelector("#icon-open");
const iconClose = document.querySelector("#icon-close");
const nav = document.querySelector("nav");

iconOpen.addEventListener("click", function () {
  nav.style.transform = "translateX(0%)";
});

iconClose.addEventListener("click", function () {
  nav.style.transform = "translateX(-100%)";
});

// image carousel

const next = document.querySelector("#next");
const previous = document.querySelector("#previous");
const carousel = document.querySelector("#carousel__image__container");

let i = 0;

next.addEventListener("click", function () {
  i += 100;
  carousel.style.transform = `translateX(-${i}%)`;
  previous.style.display = "block";
  if (i === 300) {
    next.style.display = "none";
  }
});

previous.addEventListener("click", function () {
  i -= 100;
  carousel.style.transform = `translateX(-${i}%)`;
  next.style.display = "block";
  if (i === 0) {
    previous.style.display = "none";
  }
});

// carousel thumbnails

const thumbnails = document.querySelectorAll(".carousel_thumbnail");
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", function () {
    // apply selected thumbnail style
    thumbnails.forEach((thumbnail) => {
      thumbnail.classList.remove("selected_thumbnail");
    });
    thumbnail.classList.add("selected_thumbnail");

    for (let item of carousel.children) item.style.display = "none";
    carousel.children[thumbnail.dataset.id].style.display = "block";
  });
});

// lightbox

const modal = document.querySelector("#modal");
const modalCarousel = document.querySelector(".modal-images");
const modalThumbnails = document.querySelectorAll(".modal_carousel_thumbnail");
const closeModal = document.querySelector("#modal_icon-close");
const modalNext = document.querySelector("#modal_next");
const modalPrevious = document.querySelector("#modal_previous");
let k = 0;

carousel.addEventListener("click", function () {
  modal.style.display = "block";
});

closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});

modalThumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", function () {
    // apply selected thumbnail style
    modalThumbnails.forEach((thumbnail) => {
      thumbnail.classList.remove("modal_selected_thumbnail");
    });
    thumbnail.classList.add("modal_selected_thumbnail");

    for (let item of modalCarousel.children) item.style.display = "none";
    modalCarousel.children[thumbnail.dataset.id].style.display = "block";
    k = Number(thumbnail.dataset.id);
    toggleArrows(k);
  });
});

modalNext.addEventListener("click", function () {
  k += 1;
  modalThumbnails.forEach((thumbnail) => {
    thumbnail.classList.remove("modal_selected_thumbnail");
  });
  modalThumbnails[k].classList.add("modal_selected_thumbnail");
  for (let item of modalCarousel.children) item.style.display = "none";
  modalCarousel.children[k].style.display = "block";
  modalPrevious.style.display = "block";
  toggleArrows(k);
});

modalPrevious.addEventListener("click", function () {
  k -= 1;
  modalThumbnails.forEach((thumbnail) => {
    thumbnail.classList.remove("modal_selected_thumbnail");
  });
  modalThumbnails[k].classList.add("modal_selected_thumbnail");
  for (let item of modalCarousel.children) item.style.display = "none";
  modalCarousel.children[k].style.display = "block";
  modalNext.style.display = "block";
  toggleArrows(k);
});

function toggleArrows(k) {
  if (k === 0) {
    modalNext.style.display = "block";
    modalPrevious.style.display = "none";
  } else if (k === 3) {
    modalNext.style.display = "none";
    modalPrevious.style.display = "block";
  } else {
    modalNext.style.display = "block";
    modalPrevious.style.display = "block";
  }
}

// cart

const cart_icon = document.querySelector("#cart__icon");
const cart = document.querySelector("#cart");

cart__icon.addEventListener("click", function () {
  if (cart.style.display === "block") {
    cart.style.display = "none";
  } else {
    cart.style.display = "block";
  }
});

// counter

const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const count = document.querySelector("#count");

plus.addEventListener("click", function () {
  count.innerHTML = Number(count.innerHTML) + 1;
});

minus.addEventListener("click", function () {
  if (Number(count.innerHTML) !== 0) {
    count.innerHTML = Number(count.innerHTML) - 1;
  }
});

// add to cart
const cartButton = document.querySelector("#add_to_cart__button");
const checkoutButton = document.querySelector("#cart_checkout__button");
const cartItem = document.querySelector("#cart_item");
const emptyCartMessage = document.querySelector("#cart_empty__message");
const cartDeleteButton = document.querySelector("#cart_delete__button");
const itemCount = document.querySelector("#item_count");
const cartTotal = document.querySelector("#cart_total");
const cartNotification = document.querySelector("#cart__notification");

cartButton.addEventListener("click", function () {
  if (Number(count.innerHTML) > 0) {
    emptyCartMessage.style.display = "none";
    cartItem.style.display = "flex";
    checkoutButton.style.display = "block";
    cartNotification.style.display = "block";
    cartNotification.innerHTML = count.innerHTML;
    itemCount.innerHTML = count.innerHTML;
    cartTotal.innerHTML = `$${Number(count.innerHTML) * 125}.00`;
  }
});

cartDeleteButton.addEventListener("click", function () {
  emptyCartMessage.style.display = "block";
  cartItem.style.display = "none";
  checkoutButton.style.display = "none";
  cartNotification.style.display = "none";
});
