var mySwiper = new Swiper('#swiper', { 
    autoplay:{delay:1000},
    loof:true,
    slidesPerView: 5,
    spaceBetween: 10,
    navigation:{
        nextEl:'#swiper .swiper-button-next',
        prevEl:'#swiper .swiper-button-prev',
    },
})