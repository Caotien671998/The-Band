const buyBtns = document.querySelectorAll('.js-buy-ticket')

const modal= document.querySelector('.js-modal')

const modalClose=document.querySelector('.js-modal-close')
//Ham hien thi modal mua ve, them class open vao model
function showBuyTickets(){
    
    modal.classList.add('open')
}
//ham an , go bo class open cua model
function hideBuyTickets(){
    modal.classList.remove('open')
}
//lap lai qua tung the button va nghe hanh vi lick
for (const buyBtn of buyBtns){
    buyBtn.addEventListener('click',showBuyTickets)
}

//nghe hanh vi click
modalClose.addEventListener('click',hideBuyTickets)




var header = document.getElementById('header');

var mobileMenu = document.getElementById('mobile-menu');

var headerHeight= header.clientHeight
// Dong mo mobile menu
mobileMenu.onclick=function(){
    var isClose= header.clientHeight ===headerHeight;
    if(isClose){
        header.style.height ='auto';
    }else{
        header.style.height= null;
    }
}
//Tu dong dong khi chon menu
var menuItems=document.querySelectorAll('#nav li a[href*="#"]');
for (var i=0; i< menuItems.length;i++){
    var menuItem=menuItems[i];

    menuItem.onclick=function() {
        header.style.height= null;
    }
}