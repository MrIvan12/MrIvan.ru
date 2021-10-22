const name1 = document.querySelector('.name1');
const input_name = document.querySelector('.input_name');
const input_password = document.querySelector('.input_password');
const get_auth = document.querySelector('.get_auth');
const comment = document.querySelector('.comment');
const comments1 = document.querySelector('.comments1');

let comments2 =[]
comments1.innerHTML = localStorage.getItem('com');
name1.textContent = localStorage.getItem('name');
get_auth.addEventListener('click',function(){
    event.preventDefault();
    localStorage.setItem('name',input_name.value)
    name1.textContent = localStorage.getItem('name');
    console.log('click');

   out = '';
   
    out += `<p>${comments1.value}</p>`
   localStorage.setItem('com',JSON.stringify(out))
   comments1.innerHTML = JSON.parse(localStorage.getItem('com'));
   
   

});