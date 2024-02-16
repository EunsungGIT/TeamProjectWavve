// 채팅 API
const chat = document.querySelector ('#chat')
const chat_icon = document.querySelector('#chat_icon')
const chat_box = document.querySelector('.chat_box')
const chat_message = document.querySelector('.chat_message')
const user_text = document.querySelector('.user_text')
const chatBtn = document.querySelector('#chatBtn')
const apiEndpoint = 'https://api.openai.com/v1/chat/completions'
const apiKey =

chat_box.classList.add('chatHide')
chat_icon.addEventListener('click', ()=>{
    chat_box.classList.toggle('chatHide')
    chat_box.classList.toggle('chatShow')
})

chatBtn.addEventListener('click', ()=>{
    let message = user_text.value
    addMessage('프로필1',message)
    user_text.value = ''
})

function addMessage(target, contents){
    const messageElement = document.createElement('div')
    messageElement.classList.add('message')
    messageElement.innerHTML = `${target} : ${contents}`
    chat_message.appendChild(messageElement)
}

// UP 버튼 스크롤
const up = document.querySelector('#up')

up.addEventListener('click', ()=>{
    window.scrollTo({top: 0})
})

// header 프로필 mouseenter
const profile = document.querySelector('.profile')
const profile_m = document.querySelector('.profile_m')

profile_m.style.opacity = '0';
profile_m.style.display = 'none';
profile.addEventListener('mouseenter', () => {
    profile_m.classList.add('show')
    profile_m.classList.remove('hide')
    setTimeout(() => {
        profile_m.style.display = 'block'
    }, 100);
});
profile.addEventListener('mouseleave', () => {
    profile_m.classList.add('hide')
    profile_m.classList.remove('show')
    setTimeout(() => {
        profile_m.style.display = 'none'
    }, 300);
});

// header 프로필 내 알림함
const profile_m_a = document.querySelectorAll('.profile_m a')
const notification = document.querySelector('.notification')
const notification_box = document.querySelector('.notification_box')

notification.style.display = 'none';
profile_m_a[3].addEventListener('click', ()=>{
    notification.style.display = 'block';
})

// header 쿠폰 mouseenter
const coupon = document.querySelector('.coupon')
const coupon_m = document.querySelector('.coupon_m')

coupon_m.style.opacity = '0';
coupon_m.style.display = 'none';
coupon.addEventListener('mouseenter', () => {
    coupon_m.classList.add('show')
    coupon_m.classList.remove('hide')
    setTimeout(() => {
        coupon_m.style.display = 'block'
    }, 100);
});
coupon.addEventListener('mouseleave', () => {
    coupon_m.classList.add('hide')
    coupon_m.classList.remove('show')
    setTimeout(() => {
        coupon_m.style.display = 'none'
    }, 300);
});

// 카테고리 mouseenter
const category = document.querySelector('.category')
const category_m = document.querySelector('.category_m')

category_m.style.display = 'none';
category.addEventListener('mouseenter', ()=>{
    category_m.style.display = 'block';
})
category.addEventListener('mouseleave', ()=>{
    category_m.style.display = 'none';
})

// 카테고리 내 전체 카테고리
const category_m_a = document.querySelectorAll('.category_m a')
const category_all = document.querySelector('.category_s')

category_all.style.display = 'none'
category_m_a[0].addEventListener('click', ()=>{
    category_all.style.display = 'block'
})

// footer swiper
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