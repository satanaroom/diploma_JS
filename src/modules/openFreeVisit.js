'use strict';

const openFreeVisit = () => {
    const freeVisitForm = document.getElementById('free_visit_form'),
        formContentVisit = document.querySelector('.form-content-visit');

    document.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('open-popup')) {
            freeVisitForm.style.display = 'block';
            formContentVisit.style.opacity = "0";
                let x = 0;
                const timer = setInterval(() => {
                    x += 0.1;
                    formContentVisit.style.opacity = `${x}`;
                    if (formContentVisit.style.opacity === "1.1") {
                        clearInterval(timer);
                    }
                }, 20);
        } else if (target.classList.contains('close_icon') || 
        target.classList.contains('overlay')) {
            document.querySelectorAll('#callback_form2-phone').forEach((elem)=> {
                elem.value = '';
            });
            document.querySelectorAll('#callback_form2-name').forEach((elem)=> {
                elem.value = '';
            });
            let x = 1;
            const timer = setInterval(() => {
                x -= 0.1;
                formContentVisit.style.opacity = `${x}`;
                if (formContentVisit.style.opacity === "-0.1") {
                    clearInterval(timer);
                    freeVisitForm.style.display = "none";
                }
            }, 1);
        }
    });
};

export default openFreeVisit;