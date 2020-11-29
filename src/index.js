'use strict';

import maskPhone from './modules/maskPhone';
import dropDowmMenu from './modules/dropDowmMenu';
import modalWindows from './modules/modalWindows';
import sendForm from './modules/sendForm';
import getPromocode from './modules/getPromocode';
import showBurger from './modules/showBurger';
import scrollTop from './modules/scrollToTop';
import carousel from './modules/carousel';
import photoGallery from './modules/photoGallery';
import fixedMenu from './modules/fixedMenu';
import topSlider from './modules/topSlider';

//maskPhone
maskPhone(".phonecall", "+_(___) ___-__-__");
//dropDownMenu
dropDowmMenu();
//callBack
modalWindows();
//sendForm
sendForm();
//promo
getPromocode();
//showBurger
showBurger();
//scrollToTop
scrollTop();
//carousel
carousel();
//photoGallery
photoGallery();
//fixedMenu
fixedMenu();
//topSlider
topSlider();

