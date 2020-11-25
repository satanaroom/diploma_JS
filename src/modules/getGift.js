'use strict';

const getGift = () => {
    const gift = document.getElementById('gift'),
        formContentGift = document.querySelector('.form-content-gift'),
        fixedGift = document.querySelector('.fixed-gift');

    document.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('fixed-gift')) {
            gift.style.display = 'block';
            formContentGift.style.opacity = "0";
            let x = 0;
            const timer = setInterval(() => {
                x += 0.1;
                formContentGift.style.opacity = `${x}`;
                if (formContentGift.style.opacity === "1.1") {
                    clearInterval(timer);
                }
            }, 20);
            fixedGift.remove();
        } else if (target.classList.contains('close_icon') || 
        target.classList.contains('overlay')) {
            let x = 1;
            const timer = setInterval(() => {
                x -= 0.1;
                formContentGift.style.opacity = `${x}`;
                if (formContentGift.style.opacity === "-0.1") {
                    clearInterval(timer);
                    gift.style.display = "none";
                }
            }, 1);
        }
    });
};

export default getGift;