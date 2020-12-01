'use strict';

const burger = () => {
    const popupMenu = document.querySelector(".popup-menu"),
        burger = document.querySelector('.hidden-large'),
        hiddenSmall = document.querySelector('.hidden-small');

    window.addEventListener('resize', () => {
        let x = window.innerWidth;
            if (x <= 768) {
                burger.style.display = 'block';
                hiddenSmall.style.display = 'none';
            }
            if (x > 768) {
                burger.style.display = 'none';
                hiddenSmall.style.display = '';
            }
    });
    document.addEventListener("click", event => {
      const target = event.target;
      if (target.closest(".hidden-large > img")) {
        popupMenu.style.display = "flex";
      }
      if (target.closest(".close-menu-btn > img ")) {
        popupMenu.style.display = "none";
      }
      if (target.closest(".scroll > a")) {
        popupMenu.style.display = "none";
      }
    });
  };
  
  export default burger;