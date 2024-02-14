var mySwiper = new Swiper('#swiper_notice', {
    direction: 'vertical',
    autoplay:{delay:1000},
    loop:true,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation:{
        nextEl:'#swiper_notice #f_next',
        prevEl:'#swiper_notice #f_prev',
    },
})