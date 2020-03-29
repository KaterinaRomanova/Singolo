//навигация смена активной вкладки по нажатию
const mainNav = document.getElementById('navigation');
mainNav.addEventListener('click',(event)=>{
    mainNav.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    navBlock.classList.add('visibility_nav');
    turned.classList.add('visibility_nav');
});


//Смена активной ссылки в навигации при перемещении по странице
document.addEventListener('scroll',onScroll);
function onScroll(event){
    const cursPos = window.scrollY;
    const sections = document.querySelectorAll("body > section");
    const links = document.querySelectorAll(".navigation a");

    sections.forEach((el) => {
        if(el.offsetTop-250 <= cursPos && (el.offsetTop + el.offsetHeight) > cursPos){
            links.forEach((a) => {
                a.classList.remove('active');
                if(el.getAttribute('id') === a.getAttribute('href').substring(1)){
                    a.classList.add('active');
                }
            })
        }
    });
}


//модальное окно
var form = document.querySelector('form');
var popup = document.querySelector('.visibility');
var buttModal = document.querySelector('.modal__button');

var SubjectInput = form.querySelector('.subject');
var DescriptionTextarea = form.querySelector('.project-detail');

var DescriptionText = document.querySelector('.project-detail-text');
var SubjectText = document.querySelector('.subject-text');

form.addEventListener('submit', function(evt){
    evt.preventDefault();
    popup.classList.remove('visibility');
    
    var inputText = SubjectInput.value;
    if(inputText.length !== 0){
        SubjectText.textContent = 'Subject: ' + inputText;
    }else{
        SubjectText.textContent = 'No subject';
    }

    var textareaText = DescriptionTextarea.value;
    if(textareaText.length !== 0){
        DescriptionText.textContent = 'Description: ' + textareaText;
    }else{
        DescriptionText.textContent = 'No description';
    }

});


buttModal.addEventListener('click',function(){
    popup.classList.add('visibility');
    form.reset();
    });

document.addEventListener('keydown',function(evt){
    if(evt.keyCode === 27){
        popup.classList.add('visibility');
        form.reset();
        
    }
});


//перемещение картинок парфолио


var portfolioNavButton = document.querySelectorAll('.navigation-list button');

const portfolioNav = document.getElementById('navigation-list');

var addThumbnailClickHandler = function(element) {
    const portfolioImg = document.getElementById('portfolio__img-block');
    element.addEventListener('click',(event)=>{
        portfolioNav.querySelectorAll('button').forEach(el => el.classList.remove('active1'));
            const Img = portfolioImg.querySelectorAll('img');
            const img0 = Img[0].src;
            element.classList.add('active1');
            portfolioImg.querySelectorAll('img').forEach(el => el.classList.remove('active3'));
            for(var i = 0; i  < Img.length; i++){
                if(i == Img.length-1 ){
                    Img[i].src = img0;
                }else{
                    Img[i].src = Img[i+1].src;
                }
            }
    });
};
for (var i = 0; i < portfolioNavButton.length; i++) {
    addThumbnailClickHandler(portfolioNavButton[i]);
}



//подсвечивание картинок парфолио
const portfolioImg = document.getElementById('portfolio__img-block');

portfolioImg.addEventListener('click',(event)=>{
    portfolioImg.querySelectorAll('img').forEach(el => el.classList.remove('active3'));
    event.target.classList.add('active3');
});


//телефон меняет фон
var imgPhoneVertical = document.querySelector('.iPhone_vertical');
var imgPhoneVerticalBlack = document.querySelector('.iPhone_verticalBlack');

imgPhoneVertical.addEventListener('click',(event)=>{
    imgPhoneVertical.classList.add('displayNone');
});

imgPhoneVerticalBlack.addEventListener('click',(event)=>{
    imgPhoneVertical.classList.remove('displayNone');
});


var imgPhoneHorizontal = document.querySelector('.iPhone_horizontal');
var imgPhoneHorizontalBlack = document.querySelector('.iPhone_horizontalBlack');

imgPhoneHorizontal.addEventListener('click',(event)=>{
    imgPhoneHorizontal.classList.add('displayNone');
});

imgPhoneHorizontalBlack.addEventListener('click',(event)=>{
    imgPhoneHorizontal.classList.remove('displayNone');
});





//слайдер

const CursorLeft = document.querySelector('.cursor_left');
const CursorRight = document.querySelector('.cursor_right');
const slides = document.querySelectorAll('slider__wrapper>div');


CursorLeft.addEventListener('click', onScrollLeft);
CursorRight.addEventListener('click', onScrollRight);



function onScrollLeft(event){
    var noActiveElement = document.querySelector('.slider__wrapper .displayNone');
    var ActiveElement = document.querySelector('.slider__wrapper .activeElement');
    noActiveElement.classList.remove('displayNone');

    noActiveElement.classList.add('displayLeft');
    
    setTimeout(function(){
    noActiveElement.classList.remove('displayLeft');
    ActiveElement.classList.add('displayNone');
    noActiveElement.classList.add('activeElement');
    ActiveElement.classList.remove('activeElement')
    },500)
}


function onScrollRight(event){
    var noActiveElement = document.querySelector('.slider__wrapper .displayNone');
    var ActiveElement = document.querySelector('.slider__wrapper .activeElement');
    noActiveElement.classList.remove('displayNone');

    noActiveElement.classList.add('displayRight');
    
    setTimeout(function(){
    noActiveElement.classList.remove('displayRight');
    ActiveElement.classList.add('displayNone');
    noActiveElement.classList.add('activeElement');
    ActiveElement.classList.remove('activeElement')
    },500)
}

//
const headerMenu = document.querySelector('.header__menu');
const navBlock = document.querySelector('.header__navigation');
const turned = document.querySelector('.turned');
headerMenu.addEventListener('click',(event)=>{
    navBlock.classList.remove('visibility_nav');
    turned.classList.remove('visibility_nav');
});
turned.addEventListener('click',(event)=>{
    navBlock.classList.add('visibility_nav');
    turned.classList.add('visibility_nav');
});