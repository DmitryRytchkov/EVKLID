
// BURGER MENU

$(document).ready(function() {
    $('.header__menu-burger').click(function() {
        $('.header__menu-burger').toggleClass('open-menu');
        $('.header__nav-burger').toggleClass('open-menu');
        
        $('.header__nav-menu').appendTo('.header__nav-burger');        
        $('.header__nav-menu-list').addClass('header__nav-menu-list-burger');
        $('.header__nav-menu-list').removeClass('header__nav-menu-list');
        $('.header__nav-menu').addClass('header__nav-menu-burger');
        $('.header__nav-menu').removeClass('header__nav-menu'); 
    });    
});

// SEARCH FORM

$(document).ready(function() {
    $('.header__nav-btn-submit').click(function() {
        $('.header__search, .header__search-form input, .header__nav-btn-close').toggleClass('open');        
        $('.header__nav-btn-submit').toggleClass('not-active');        
    });

    $('.header__nav-btn-close').click(function() {
        $('.header__search, .header__search-form input, .header__nav-btn-close').toggleClass('open');        
        $('.header__nav-btn-submit').toggleClass('not-active');        
    });
});

// SLAIDER

const swiper = new Swiper('.swiper', {    
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }  
  });

// TABS

document.querySelectorAll('.work__tab-btn').forEach(function(tabsbtn) {
    tabsbtn.addEventListener('click', function(event){
        const path = event.currentTarget.dataset.path;

        document.querySelectorAll('.work__tab-btn').forEach(function(btn){
            btn.classList.remove('work__tab-btn-active')
        })
        event.currentTarget.classList.add('work__tab-btn-active');

        document.querySelectorAll('.work__information').forEach(function(tabsContent) {
            tabsContent.classList.remove('work__information-active')
        });      

        document.querySelector(`[data-target="${path}"]`).classList.add('work__information-active');       
        
    });
});

// ACCORDOIN

$( function() {
    $( ".faq__list" ).accordion({
        collapsible: true,
        autoHeight: false,
        active: false,
        animate: 1000,   
        icons: false     
    })       
});
















