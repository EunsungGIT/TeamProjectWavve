/* 비슷한 영화 및 남녀노소 모두, 오늘은 애니 앞으로 */
var mySwiper = new Swiper('#wavve_images', { 
    loof:true,
    slidesPerView: 5,
    spaceBetween: 10,
    navigation:{
        nextEl:'#wavve_images .swiper-button-next',
        prevEl:'#wavve_images .swiper-button-prev',
    },
})

//일반자바
const related_video = document.querySelector('.related_video')
const recommendation = document.querySelector('.recommendation')
const details =document.querySelector('.details')

const info_contents =document.querySelector('.info_contents')
const recommend =document.querySelector('.recommend')
const information =document.querySelector('.information')
console.log(related_video,recommendation,details)
console.log(info_contents,recommend,information)
recommend.style.display = 'none'
information.style.display = 'none'

related_video.addEventListener('click',()=>{
    recommend.style.display = 'none'
    information.style.display = 'none'
    info_contents.style.display='block'

})

recommendation.addEventListener('click',()=>{
    recommend.style.display = 'block'
    information.style.display='none'
    info_contents.style.display ='none'
})
details.addEventListener('click',()=>{
    info_contents.style.display ='none'
    recommend.style.display = 'none'
    information.style.display = 'block'
})
