/*=========== MENU__TOGGLER ===========*/
const navbar = document.querySelector('.nav');
const menuToggler = document.querySelector('.menu__toggler');

menuToggler.addEventListener('click',()=>{
    navbar.classList.toggle('open__menu');

});

/*=========== SCROLL HEADER ===========*/
const header = document.querySelector('.header__sec');
window.addEventListener('scroll', () => {
    if(window.scrollY >= 40){
        header.classList.add('scroll__sec');
    }else{
        header.classList.remove('scroll__sec');
    }
})

/*=========== DARK__MODE ===========*/
let darkMode = document.querySelector('.dark__mode'),
    body = document.querySelector('body');

  darkMode.addEventListener('click', () => {
    body.classList.toggle('dark');
  });