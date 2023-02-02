const cosult = document.querySelector('.header__book');
const popup = document.querySelector('.popup');
const sendform = document.querySelector('.send-form');
const connect = document.querySelector('.main-inTouch');
const popupTY = document.querySelector('.popupTY');
const popupClose = document.querySelector('.popupClose');
const freeConsult = document.querySelector('.col-consulting');
const contactUs = document.querySelector('.consult-contactus');

function popupOpen(){
if(popup.classList.contains("passive")){

    popup.classList.remove("passive");
    popup.classList.add("active");
}
};


cosult.addEventListener("click", popupOpen);
connect.addEventListener("click", popupOpen);
freeConsult.addEventListener("click", popupOpen);
contactUs.addEventListener("click", popupOpen);

function closepopupTY(){
    popup.classList.remove("active");
    popup.classList.add("passive");


    popupTY.classList.remove("passive");
    popupTY.classList.add("active");
    setTimeout(function(){
        popupTY.classList.remove("active");
        popupTY.classList.add("passive");
    },2000)

    // alert("Спасибо за вашу заявку!\nВаше мнение много значит для нас!")
}

function closepopup(){
    popup.classList.remove("active");
    popup.classList.add("passive");
   
}


popupClose.addEventListener("click", closepopup);
sendform.addEventListener("click", closepopupTY);

const inst = document.querySelector('.ksenia-inst-icon');

// INST---------------------------
function gotoinst(){
    location.href = 'https://www.instagram.com/aga.ta_tahf/';
};

inst.addEventListener("click", gotoinst)
// --------------------------------------------


// PHONE----------------------------------------------------
const phoneimg = document.querySelector('.callus-img');
const callMe = document.querySelector('.contacts-img');
const footerPhone = document.querySelector('.fPhone');

function call(){
location.href = 'tel:+375292196736';
};

footerPhone.addEventListener("click", call);
callMe.addEventListener("click", call);
phoneimg.addEventListener("click", call);
// -----------------------------------------------------------------

// FORM==========================================================

const formButton = document.querySelector('.form-button');
const formBlock = document.querySelector('.form-content');
const formTy = document.querySelector('.form-contentSent')
const formOneMore = document.querySelector('.form-contentSent-more');




if(formBlock.classList.contains("active")){
function formSent(){
    formBlock.classList.remove("active");
    formBlock.classList.add("passive");
    formTy.classList.remove("passive");
    formTy.classList.add("active");
}
    formButton.addEventListener("click", formSent)
}


    function formMore(){
        formTy.classList.remove("active");
        formTy.classList.add("passive");
        formBlock.classList.remove("passive");
        formBlock.classList.add("active");
    }
        formOneMore.addEventListener("click", formMore)
    
        // MY MEDIA==============================================
    const myVk = document.querySelector('.footer-vk');
    const myInst = document.querySelector('.footer-inst');

    function gotoMyVk(){
        location.href = 'https://vk.com/shecallsmebladee';
    };
    function gotoMyInst(){
    location.href= 'https://www.instagram.com/krammerkkk/';
    }

    myVk.addEventListener("click", gotoMyVk);
    myInst.addEventListener("click", gotoMyInst);


        // =================================================