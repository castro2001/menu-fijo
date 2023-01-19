let menuBtn= document.querySelector('.Menu_ico');
let menu = document.querySelector('  .navigation ul')

 menuBtn.addEventListener('click', function(){
    if (menu.classList.contains('show')){
        menu.classList.remove('show'); 
    }else{
        menu.classList.add('show');
    }
})
