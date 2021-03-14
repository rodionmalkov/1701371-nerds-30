const modalLink = document.querySelector(".modal-link");
const modalPopup = document.querySelector(".modal");
const modalClose = modalPopup.querySelector(".button-close");
const modalForm = modalPopup.querySelector(".feedback-form");
const modalBtnSend = document.querySelector('.button-form');
const modalLogin = modalPopup.querySelector(".input-name-user");
const modalEmail = modalPopup.querySelector(".input-email-user");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

modalLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.add("modal-show");

  if (storage) {
    modalLogin.value = storage;
    modalEmail.focus();
  } else {
    modalLogin.focus();
  }
});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.remove("modal-show");
  modalPopup.classList.remove("modal-error");
});

modalBtnSend.addEventListener("click", function (evt) {
  if (!modalLogin.value || !loginEmail.value) {
  modalPopup.classList.add("modal-error");
  } else
    if (isStorageSupport) {
    localStorage.setItem("login", modalLogin.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalPopup.classList.contains("modal-show")) {
      evt.preventDefault();
     modalPopup.classList.remove("modal-show");
    }
  }
});
/* Slider */

let initSlider = function() {
  let sliderBlock = document.querySelector('.slider');
  let sliderToggles = sliderBlock.querySelectorAll('.slider-toggle');
  let sliderItems = sliderBlock.querySelectorAll('.slider-item');
  let currentSlide = 0;

  sliderToggles.forEach(function(sliderToggle, index) {
    sliderToggle.addEventListener('click', function() {
      sliderItems[currentSlide].classList.remove('slider-item-current');
      sliderToggles[currentSlide].classList.remove('slider-toggle-current');

      sliderItems[index].classList.add('slider-item-current');
      sliderToggle.classList.add('slider-toggle-current');

      currentSlide = index;
    })
  })
};

initSlider();
