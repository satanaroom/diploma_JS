'use strict';

const dropDownMenu = () => {
    const clubSelect = document.querySelector('.club-select'),
        clubsMenu = document.getElementById('clubs-menu');

    clubSelect.addEventListener('click', event => {
        let target = event.target;
        if (target.classList.contains('hidden-menu')) {
            clubsMenu.style.display = "block";
            target.classList.remove('hidden-menu');
            target.classList.add('blocked-menu');
        } else if (target.classList.contains('blocked-menu')) {
            target.classList.remove('blocked-menu');
            target.classList.add('hidden-menu');
            clubsMenu.style.display = "none";
        }
    });
};

export default dropDownMenu;