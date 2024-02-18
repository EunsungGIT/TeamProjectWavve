// 팝업 비디오
const popup_video = document.querySelector('.popup_video')
const main_video = document.querySelector('.video_bg .video')
const closeBtn = document.querySelector('.popup_video > a')
console.log(popup_video,main_video)

popup_video.style.display = 'none'
window.addEventListener('scroll',()=>{
    const scrollPosition = window.scrollY;
    console.log(scrollPosition)

    if(scrollPosition >= 300){
        popup_video.style.display = 'flex'
        main_video.style.display = 'none'
    }else{
        popup_video.style.display = 'none'
        main_video.style.display = 'block'
    }
})

// 메인 비디오


// 스케줄 swiper
var mySwiper = new Swiper('#swiper_schedule', { 
    slidesPerView: 4,
    navigation:{
        nextEl:'#swiper_schedule #schedule_next',
        prevEl:'#swiper_schedule #schedule_prev',
    },
})