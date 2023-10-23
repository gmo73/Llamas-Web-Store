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
  
    
//initialize swiper when document ready
    const swiper = new swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
      
      });