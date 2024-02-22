/* /* 알림함 & 알림설정 */
/* 알림함 닫기 변수 */
const notification_entire = document.querySelector(".notification_bg")
/* 알림함 */
const notification_wrap = document.querySelector(".notification")
/* 알림설정 */
const setting_wrap = document.querySelector(".setting_wrap")

/* 알림함 & 알림설정 버튼 - > 알림설정으로 가는 버튼 */
const notification_btn = document.querySelector(".notification_top a")
console.log(notification_btn)
const notification_title = document.querySelector('.notification_top h2')
const notification_title_btn = document.querySelector("notification_top a img")
const notification_close = document.querySelector(".setting_close > a")
console.log(notification_title,notification_title_btn )
/* 초기 내용 숨기기 */
setting_wrap.style.display = "none"
notification_btn.parentElement.classList.add("active")

notification_btn.addEventListener("click", () => {
    if (setting_wrap.style.display === "none") {
        setting_wrap.style.display = "block";
        notification_wrap.style.display = "none";
        notification_title.innerHTML = '알림설정'
        notification_btn.innerHTML = "<img src= /images/icon/notification_icon.png> 알림함"
    } else {
        setting_wrap.style.display = "none";
        notification_wrap.style.display = "block";
        notification_title.innerHTML = '알림함';
        notification_btn.innerHTML = "<img src= /images/icon/notification_icon.png> 알림설정";
    }
});

/* 알림함 x 버튼 */
notification_close.addEventListener("click", ()=>{
    notification_entire.style.display = "none"
})
