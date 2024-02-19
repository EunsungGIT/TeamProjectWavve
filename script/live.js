const live_video_a = document.querySelectorAll('.live_video a')
const live_video = document.querySelectorAll('.live_video a video')
console.log(live_video,live_video_a)

live_video_a.forEach((t,i)=>{
    t.addEventListener('mouseenter',()=>{
        live_video[i].play()
        live_video_a[i].style.flex = '2'
    })
})