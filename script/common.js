var mySwiper = new Swiper('#swiper_notice', {
    direction: 'vertical',
    autoplay:{delay:1000},
    loop:true,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation:{
        nextEl:'#swiper_notice .swiper-button-next',
        prevEl:'#swiper_notice .swiper-button-prev',
    },
})