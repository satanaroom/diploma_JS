'use strict';

import maskPhone from './modules/maskPhone';
import dropDowmMenu from './modules/dropDowmMenu';
import openFreeVisit from './modules/openFreeVisit';
import callBackMe from './modules/callBackMe';
import getGift from './modules/getGift';
import sendForm from './modules/sendForm';
import getPromocode from './modules/promo';
import burger from './modules/burger';
import scrollTop from './modules/scrollToTop';

//maskPhone
maskPhone("#callback_form2-phone", "+_(___) ___-__-__");
maskPhone("#callback_form1-phone", "+_(___) ___-__-__");
maskPhone("#callback_form-phone", "+_(___) ___-__-__");
maskPhone("#phone", "+_(___) ___-__-__");
maskPhone("#callback_footer_form-phone", "+_(___) ___-__-__");
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
//burger
burger();
//scrollToTop
scrollTop();

