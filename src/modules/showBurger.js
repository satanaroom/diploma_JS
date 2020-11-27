"use strict";

const showBurger = () => {
    const burger = document.querySelector('.hidden-large');

    window.addEventListener('resize', () => {
        let x = window.innerWidth;
            if (x < 768) {
                burger.style.display = 'block';
            }
            if (x > 768) {
                burger.style.display = 'none';
            }
    });
};

export default showBurger;