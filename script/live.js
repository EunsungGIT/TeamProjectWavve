/* 시청예약 */
const reservation_table = document.querySelectorAll('.reservation_table a')
const reservation_bg = document.querySelector('.reservation_bg')
const reservation_close = document.querySelector('.reservation #close')

reservation_bg.style.display = 'none'
reservation_table[0].addEventListener('click',()=>{
    reservation_bg.classList.add('wide')
    reservation_bg.style.display = 'flex'
})
reservation_close.addEventListener('click',()=>{
    reservation_bg.style.display = 'none'
})

/* 비디오 */
const live_video_a = document.querySelectorAll('.live_video a')
const live_video = document.querySelectorAll('.live_video a video')
console.log(live_video,live_video_a)

live_video_a.forEach((t,i)=>{
    t.addEventListener('mouseenter',()=>{
        live_video[i].play()
        live_video_a[i].style.flex = '2'
    })
})