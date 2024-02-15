var mySwiper = new Swiper('#swiper_series', { 
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides : false,
    loop:true,
    navigation:{
        nextEl:'#swiper_series #search_next',
        prevEl:'#swiper_series #search_prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 10,
            centeredSlides : true,
            loop:true,
        },
        1240: {
            slidesPerView: 5,
            spaceBetween: 10,
            centeredSlides : true,
            loop:true,
        }
    },
})