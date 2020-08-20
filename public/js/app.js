
// let nav = document.querySelector('#nav');
let bars = document.querySelectorAll('#bars');
let  navToggle = (nav, header_right)=>{
  if(nav.className == 'nav_close'){
         nav.classList.add('nav_open');
         header_right.classList.add('header_right_open');
  
      }else {
        nav.classList.remove('nav_open');
        header_right.classList.remove('header_right_open');
      }
}




if(bars.length >= 1){
  bars.forEach(bar =>{
    bar.addEventListener('click', (e)=>{
       let header_right = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('#header_right');
       let nav = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('#nav')
       bar.classList.toggle('change');
       
    
       navToggle(nav, header_right)
     });
   })

}else {

  let bar = document.querySelector('#bars');
  let header_right = document.querySelector('#header_right');

  bar.addEventListener('click', (e)=>{
    navToggle(nav, header_right)
  })
}



