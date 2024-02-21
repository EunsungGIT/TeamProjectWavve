// 새로고침
const now_btn  = document.getElementById('now')
console.log(now_btn)
now_btn.addEventListener('click',()=>{
    location.reload()
})

//현재 시간 띄우기

const time = document.querySelector('.time p ')
const current_date = document.querySelector('.time h1 em')
let now = new Date();
let hour = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
let month = now.getMonth()
let days = now.getDate()
let days_week = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일']
let day_week =days_week[now.getDay()]
console.log(now)
console.log(current_date)
console.log(day_week)
console.log(month,days)



time.innerHTML =hour +`:`+(minutes < 10 ? '0':'')+minutes+':'+(seconds < 10 ?'0':'')+seconds+''
current_date.innerHTML = `${month+1}` +`월 `+(days < 10 ? '0':'') + days+'일 '+day_week; 

function reload_time(){
    // 시간 부르기
    now = new Date();
    hour = now.getHours();
    minutes = now.getMinutes();
    seconds = now.getSeconds();
    month = now.getMonth()
    days = now.getDate()
    days_week = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일']
    day_week =days_week[now.getDay()]

    time.innerHTML =hour +`:`+(minutes < 10 ? '0':'')+minutes+':'+(seconds < 10 ?'0':'')+seconds+''
    current_date.innerHTML = `${month+1}` +`월 `+(days < 10 ? '0':'') + days+'일 '+day_week; 
}

window.onload =function(){
    setInterval(reload_time,1000)
}

// 클릭시 보이기

const broadcasting = document.querySelectorAll ('.broadcasting a')
console.log(broadcasting[0],broadcasting[1],broadcasting[2])
const broadcasting_contents = document.querySelectorAll('.announcement_main')
console.log(broadcasting_contents[0],broadcasting_contents[1],broadcasting_contents[2]) 

const hide =()=>{
    for(let i of broadcasting_contents){i.style.display = 'none'}
}

hide()
broadcasting_contents[0].style.display = 'block'


broadcasting.forEach((t,i)=>{
    console.log(t,i)
    t.addEventListener('click',()=>{
        hide()
        broadcasting_contents[i].style.display='block'
    })
})

//실시간 TV
const live_tv = document.querySelector('.real_time')
console.log(live_tv)
live_tv.addEventListener('click',()=>{
    window.location.href = './live.html'
})

//시간표  시간없으면 그냥 활성화 시키는용

// const live_on = document.querySelectorAll('.on_air h1')
// console.log(live_on[0])
// for (let j of live_on){
//     j.innerHTML = hour +`:`+(minutes < 10 ? '0':'')+minutes
// }



// 
// let slide =new Swiper('.contents_all',{
//     slidesPerView: 7,
// })