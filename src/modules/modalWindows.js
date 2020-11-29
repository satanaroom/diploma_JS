'use strict';

const modalWindows = () => {
    const freeVisitForm = document.getElementById("free_visit_form"),
      callbackForm = document.getElementById("callback_form"),
      thanks = document.getElementById("thanks"),
      gift = document.getElementById("gift"),
      formContentCallback = document.querySelector('.form-content-callback'),
      formContentGift = document.querySelector('.form-content-gift'),
      formContentVisit = document.querySelector('.form-content-visit');
  
    document.addEventListener("click", event => {
      const target = event.target;
      if (target.closest(".free-visit")) {
        freeVisitForm.style.display = "block";
        formContentVisit.style.opacity = "0";
        let x = 0;
        const timer = setInterval(() => {
          x += 0.1;
          formContentVisit.style.opacity = `${x}`;
          if (formContentVisit.style.opacity === "1.1") {
            clearInterval(timer);
          }
        }, 20);
      }
      if (target.closest(".right > .call > .callback-btn")) {
        callbackForm.style.display = "block";
        formContentCallback.style.opacity = "0";
        let x = 0;
        const timer = setInterval(() => {
          x += 0.1;
          formContentCallback.style.opacity = `${x}`;
          if (formContentCallback.style.opacity === "1.1") {
            clearInterval(timer);
          }
        }, 20);
      }
  
      if (target.closest(".fixed-gift")) {
        gift.style.display = "block";
        formContentGift.style.opacity = "0";
        let x = 0;
        const timer = setInterval(() => {
          x += 0.1;
          formContentGift.style.opacity = `${x}`;
          if (formContentGift.style.opacity === "1.1") {
            clearInterval(timer);
          }
        }, 20);
      }
  
      if (
        target.closest(
          "#gift > .overlay, #gift > .form-wrapper > .close-form .close_icon, #gift > .form-wrapper > .form-content > .close-btn"
        )
      ) {
        gift.style.display = "none";
        document.querySelector(".fixed-gift").remove();
      }
  
      if (
        target.closest(
          ".overlay, .close_icon,  #thanks > .form-wrapper > .form-content > .close-btn"
        )
      ) {
        freeVisitForm.style.display = "none";
        callbackForm.style.display = "none";
        thanks.style.display = "none";
      }
    });
  };
  
  export default modalWindows;
  