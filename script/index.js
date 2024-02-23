// 팝업창
const popup_close = document.querySelector('.popup .close')
const popup = document.querySelector('.popup')
console.log(popup_close)

body_html.style.overflow = 'hidden'
popup_close.addEventListener('click', ()=>{
    popup.classList.add('hide')
    body_html.style.overflow = 'auto'
    setTimeout(() => {
        popup.style.display = 'none'
    }, 500);
});

/* 상단 메인 슬라이드 */
const my_swiper = new Swiper('#top_container', { 
    autoplay:{delay:3000},
    slidesPerView: 1, //슬라이드 한번에 1개씩 보이기
    spaceBetween: 20, // 슬라이드 여백
    centeredSlides:true, // 슬라이드의 기준을 가운데부터 시작하도록 설정하기
    loop:true,
    pagination:{
        el:'.swiper-pagination'
    },
    navigation:{
        nextEl:'#top_container .swiper-button-next',
        prevEl:'#top_container .swiper-button-prev',
    },
    breakpoints:{
        1240: {
            slidesPerView: 1.5,
        },
    },
})

/* 하단 슬라이드  */
var mySwiper = new Swiper('.swiper_wavve_images', { 
    slidesPerView: 1,
    spaceBetween: 10,
    navigation:{
        nextEl:'.swiper_wavve_images .swiper-button-next',
        prevEl:'.swiper_wavve_images .swiper-button-prev',
    },
    breakpoints:{
        430: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1240: {
            slidesPerView: 5,
        },
    },
})