var formShow = document.querySelector(".hotel-search__title--form");
var formHotel = document.querySelector(".hotel-search__form");

document.addEventListener("DOMContentLoaded", function(evt) {
  evt.preventDefault();
  if(formHotel.classList.contains("hotel-search__form--show")) {
    formHotel.classList.remove("hotel-search__form--show");
  }
  if(formShow.classList.contains("hotel-search__title--no-js")) {
    formShow.classList.remove("hotel-search__title--no-js");
    formShow.classList.add("btn--bg-secondary");
  }
});

formShow.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (!formHotel.classList.contains("hotel-search__form--show")) {
    formHotel.classList.add("hotel-search__form--show");
  }
  else {
    formHotel.classList.remove("hotel-search__form--show");
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (formHotel.classList.contains("hotel-search__form--show")) {
      formHotel.classList.remove("hotel-search__form--show");
    }
  }
});
