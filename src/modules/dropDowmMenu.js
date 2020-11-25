'use strict';
const dropDownMenu = () => {
    const clubSelect = document.querySelector('.club-select');
        
    clubSelect.addEventListener('click', event => {
        let target = event.target;
        if (target.matches('.club-select'>'ul')) {
            target.style.display = 'block';
        }
    });
        
};

export default dropDownMenu;