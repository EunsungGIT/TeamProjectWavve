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

/* const activeIndex = document.querySelector(".top_img")

// 슬라이드 활성화 감지 및 중앙 정렬
my_swiper.on('slideChange', function () {
    // 활성화된 슬라이드의 인덱스 가져오기
    activeIndex = my_swiper.realIndex;
    
    // 슬라이드가 활성화되면 해당 슬라이드의 너비를 확인하여 뷰포트 중앙에 맞추기
    var slideWidth = document.querySelector('.swiper-slide-active').clientWidth;
    var viewportWidth = window.innerWidth;

    // 뷰포트 중앙에 맞추기 위한 이동 거리 계산
    var moveDistance = (viewportWidth - slideWidth) / 2;

    // 슬라이드 컨테이너를 중앙에 맞추기 위해 CSS 클래스 추가
    document.querySelector('.swiper-wrapper').style.transform = 'translateX(' + moveDistance + '1240px)';
});

 */

/* 메인 배너 슬라이더 밑에 멈춤 버튼 실패 작업중 */
/* const main_stop_btn = document.querySelector(".stop_lockswipes")

main_stop_btn.addEventListener("click", ()=>{
    var mySwiper = new Swiper('.swiper-container', {
        // Swiper 설정
    });
})

 */
/* ------------------------------------------------------------ */

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
