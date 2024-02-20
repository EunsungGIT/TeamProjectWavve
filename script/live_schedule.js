// 새로고침
const now_btn  = document.getElementById('now')
console.log(now_btn)
now_btn.addEventListener('click',()=>{
    location.reload()
})

//현재 시간 띄우기


function reload_time(){
    let now = new Date();
    console.log(now)
    const time = document.querySelector('.time p ')
    const current_date = document.querySelector('.time h1 em')
    console.log(current_date)
    // 시간 부르기
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let month = now.getMonth()
    let days = now.getDate()
    let days_week = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일']
    let day_week =days_week[now.getDay()]
    console.log(day_week)
    time.innerHTML =hour +`:`+(minutes < 10 ? '0':'')+minutes+':'+(seconds < 10 ?'0':'')+seconds+''
    console.log(month,days)
    current_date.innerHTML = `${month+1}` +`월 `+(days < 10 ? '0':'') + days+'일 '+day_week; 
    
}

window.onload =function(){
    setInterval(reload_time,1000)
}
//
let slide =new Swiper('.contents_all',{
    slidesPerView: 7,
})