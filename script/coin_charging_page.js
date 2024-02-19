/* 상단 메인 슬라이드 */
const my_swiper = new Swiper('.crad_container', { 
    // autoplay:{delay:3000},
    slidesPerView: 1, //슬라이드 한번에 1개씩 보이기
    centeredSlides:true, // 슬라이드의 기준을 가운데부터 시작하도록 설정하기
    loop:true,
    pagination:{
        el:'.swiper-pagination'
    },
    navigation:{
        nextEl:'.crad_container .swiper-button-next',
        prevEl:'.crad_container .swiper-button-prev',
    },
    
})