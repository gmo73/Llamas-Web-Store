// Description: main js file for the project
 
 const bar = document.getElementById('bar');
 const close = document.getElementById('close');
 const nav = document.getElementById('navbar');

 if(bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
 }

 if(close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
 }
  
    

const swiper = new Swiper('.swiper', {
   
    loop: true,
    
    pagination: {
        el: '.swiper-pagination',
       
        },
        
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
});
    

