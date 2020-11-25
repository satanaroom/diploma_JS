'use strict';

const callBackMe = () => {
    const callBackForm = document.getElementById('callback_form'),
        formContentCallback = document.querySelector('.form-content-callback');

    document.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('callback-btn')) {
            callBackForm.style.display = 'block';
            formContentCallback.style.opacity = "0";
                let x = 0;
                const timer = setInterval(() => {
                    x += 0.1;
                    formContentCallback.style.opacity = `${x}`;
                    if (formContentCallback.style.opacity === "1.1") {
                        clearInterval(timer);
                    }
                }, 20);
        } else if (target.classList.contains('close_icon') || 
        target.classList.contains('overlay')) {
            document.querySelectorAll('#callback_form1-phone').forEach((elem)=> {
                elem.value = '';
            });
            document.querySelectorAll('#callback_form1-name').forEach((elem)=> {
                elem.value = '';
            });
            let x = 1;
            const timer = setInterval(() => {
                x -= 0.1;
                formContentCallback.style.opacity = `${x}`;
                if (formContentCallback.style.opacity === "-0.1") {
                    clearInterval(timer);
                    callBackForm.style.display = "none";
                }
            }, 1);
        }
    });
};

export default callBackMe;