var mySwiper = new Swiper('#swiper_series', { 
    autoplay:{delay:1000},
    loop:true,
    slidesPerView: 5,
    spaceBetween: 10,
    navigation:{
        nextEl:'#swiper_series .swiper-button-next',
        prevEl:'#swiper_series .swiper-button-prev',
    },
})