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