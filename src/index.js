'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import switchTeam from './modules/switchTeam';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

//Timer
countTimer('25 november 2020');
//Menu
toggleMenu();
//popup
togglePopUp();
//Tabs
tabs();
//Slider
slider();
//Our Team switch
switchTeam();
//Culc
calc(100);
//send-ajax-form
sendForm();