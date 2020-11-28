'use strict';

import maskPhone from './modules/maskPhone';
import dropDowmMenu from './modules/dropDowmMenu';
import openFreeVisit from './modules/openFreeVisit';
import callBackMe from './modules/callBackMe';
import getGift from './modules/getGift';
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
//freeVisit
openFreeVisit();
//callBack
callBackMe();
//gift
getGift();
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

