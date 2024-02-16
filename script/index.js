// 팝업창
const top_a = document.querySelectorAll('.contents .top a')
const checkbox = document.querySelector('#day_close')

top_a[1].addEventListener('click', ()=>{
    if(checkbox.checked){
        console.log('checked true')
    }
})

/* 상단 메인 슬라이드 */
const my_swiper = new Swiper('#top_container', { 
    autoplay:{delay:3000},
    slidesPerView: 1.5, //슬라이드 한번에 1개씩 보이기
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
    
})

/* 하단 슬라이드  */
var mySwiper = new Swiper('#swiper_wavve_images', { 
    loof:true,
    slidesPerView: 5,
    spaceBetween: 10,
    navigation:{
        nextEl:'#swiper_wavve_images .swiper-button-next',
        prevEl:'#swiper_wavve_images .swiper-button-prev',
    },
})