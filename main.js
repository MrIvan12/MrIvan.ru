const burger = document.querySelector('.burger');
const burger_activ = document.querySelector('.burger_activ');
const burger_menu = document.querySelector('.burger_menu');
const menu_burger_activ = document.querySelector('.menu_burger_activ');


burger.addEventListener('click',function(){
  burger.classList.toggle('burger_activ');
  burger_menu.classList.toggle('menu_burger_activ');
  console.log('click on burger');
});