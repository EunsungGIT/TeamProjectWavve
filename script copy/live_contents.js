/* 팝업 비디오 */
const popup_video = document.querySelector('.popup_video')
const main_video = document.querySelector('.video_bg .video')
const closeBtn = document.querySelector('.popup_video > a')
const popup_icon = document.querySelectorAll('.popup_video_bottom .icon a')
const popup_icon_img = document.querySelectorAll('.popup_video_bottom .icon a img')
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
closeBtn.addEventListener('click',()=>{
    popup_video.style.display = 'none'
})
// 재생 아이콘
popup_icon[0].addEventListener('click',()=>{
    if (video.paused) {
        video.play();
        popup_icon_img[0].src = './images/live_contents/pause_s.png'
    } else {
        video.pause();
        popup_icon_img[0].src = './images/live_contents/play_s.png'
    }
})

/* 메인 비디오 */
const pause = document.querySelector('.video > a')
const pause_img = document.querySelector('.video > a img')
const left_icon = document.querySelectorAll('.left a')
const left_icon_img = document.querySelectorAll('.left a img')
const right_icon = document.querySelectorAll('.right a')
const right_icon_img = document.querySelectorAll('.right a img')
const video = document.querySelector('#main_video')
// 재생 아이콘
pause.addEventListener('click',()=>{
    if (video.paused) {
        video.play();
        pause_img.src = './images/live_contents/pause.png'
        left_icon_img[0].src = './images/live_contents/pause_s.png'
    } else {
        video.pause();
        pause_img.src = './images/live_contents/play.png'
        left_icon_img[0].src = './images/live_contents/play_s.png'
    }
})
left_icon[0].addEventListener('click',()=>{
    if (video.paused) {
        video.play();
        pause_img.src = './images/live_contents/pause.png'
        left_icon_img[0].src = './images/live_contents/pause_s.png'
    } else {
        video.pause();
        pause_img.src = './images/live_contents/play.png'
        left_icon_img[0].src = './images/live_contents/play_s.png'
    }
})
// 전체화면 아이콘
right_icon[3].addEventListener('click',()=>{
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { // Firefox
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { // Chrome, Safari, Opera
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { // IE/Edge
        video.msRequestFullscreen();
    }
})

// 관심등록
const icon = document.querySelectorAll('.icon_box a')
const icon_img = document.querySelectorAll('.icon_box a img')
const favorite = document.querySelector('.favorite')

favorite.style.opacity = '0';
favorite.style.display = 'none';
icon[0].addEventListener('click',()=>{
    icon_img[0].src = '../images/live_contents/red_heart.svg'
    favorite.style.display = 'block';
    favorite.classList.add('show')
    setTimeout(() => {
        favorite.style.display = 'none'
    }, 3000);
})

// 공유
const share = document.querySelector('.share_bg')
const share_close = document.querySelector('.share > a')
const copy_message = document.querySelector('.copy')
const copyBtn = document.querySelector('#copyBtn')
const linkInput = document.querySelector('#link')

share.style.display = 'none'
icon[1].addEventListener('click',()=>{
    share.style.display = 'block'
})

copy_message.style.display = 'none'
copyBtn.addEventListener('click',()=>{
    navigator.clipboard.writeText(linkInput.value)
    copy_message.style.display = 'block'
    copy_message.classList.add('show')
    setTimeout(() => {
        copy_message.style.display = 'none'
    }, 3000);
})

share_close.addEventListener('click',()=>{
    share.classList.add('hide')
    setTimeout(() => {
        share.style.display = 'none'
        share.classList.remove('hide')
    }, 500);
})

// 스케줄 swiper
var mySwiper = new Swiper('#swiper_schedule', { 
    slidesPerView: 4,
    navigation:{
        nextEl:'#swiper_schedule #schedule_next',
        prevEl:'#swiper_schedule #schedule_prev',
    },
})
// 스케줄 알람
const bell = document.querySelectorAll('i')

for(let i of bell){
    i.addEventListener('click',()=>{
        i.style.color = '#1351f9'
        window.confirm('시청예약을 하시겠습니까? 시청예약 알림은 모바일앱 PUSH 알림으로 전송됩니다. 모바일 앱 설치 및 PUSH 알림 동의 여부를 꼭 확인해주세요!')
        window.alert('시청예약이 설정되었어요.')
    })
}

/* 스케줄 비디오 */
const all_recommend = document.querySelectorAll('.all_recommend a')
const live_video = document.querySelector('.live_video')
const recommend = document.querySelector('.recommend')

live_video.style.display = 'flex';
recommend.style.display = 'none';
all_recommend[0].style.color = 'white';
all_recommend[1].style.color = '';
all_recommend[0].style.borderBottom = '3px solid #1351f9'
all_recommend[1].style.borderBottom = ''

all_recommend[0].addEventListener('click', () => {
    live_video.style.display = 'flex';
    recommend.style.display = 'none';

    all_recommend[0].style.color = 'white';
    all_recommend[1].style.color = '';
    all_recommend[0].style.borderBottom = '3px solid #1351f9'
    all_recommend[1].style.borderBottom = ''
});

all_recommend[1].addEventListener('click', () => {
    live_video.style.display = 'none';
    recommend.style.display = 'block';
    all_recommend[1].style.color = 'white';
    all_recommend[0].style.color = '';
    all_recommend[1].style.borderBottom = '3px solid #1351f9'
    all_recommend[0].style.borderBottom = ''
});

// 추천 영상 swiper
var mySwiper = new Swiper('#swiper_channel', { 
    slidesPerView: 2,
    spaceBetween: 10,
    navigation:{
        nextEl:'#swiper_channel #channel_next',
        prevEl:'#swiper_channel #channel_prev',
    },
    breakpoints:{
        768: {
            slidesPerView: 3,
        },
        1240: {
            slidesPerView: 5,
        },
    },
})