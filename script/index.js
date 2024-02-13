/* 상단 메인 슬라이드 */
var mySwiper = new Swiper('#top_container', { 
    autoplay:{delay:1000},
    loof:true,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation:{
        nextEl:'#top_container .swiper-button-next',
        prevEl:'#top_container .swiper-button-prev',
    },
})

/* 하단 슬라이드  */
var mySwiper = new Swiper('#swiper_wavve_images', { 
    autoplay:{delay:1000},
    loof:true,
    slidesPerView: 5,
    spaceBetween: 10,
    navigation:{
        nextEl:'#swiper_wavve_images .swiper-button-next',
        prevEl:'#swiper_wavve_images .swiper-button-prev',
    },
})
