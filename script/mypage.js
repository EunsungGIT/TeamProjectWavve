/* 알림함 */
const notification = document.querySelector('.notification')
const contents_all = document.querySelector('.contents_all')

const notification_btn = document.querySelector(".mypage_top a:nth-child(0)")
console.log(notification_btn)

notification_btn.addEventListener("click", ()=>{
    window.open("mypage_notification_box.html", "popup", "width=560, height=550")
})


/* "width=560,height=550" */
/* holding_coin_btn.addEventListener("click", ()=>{
    window.open("coin_charging_page.html", "popup", "width=699,height=1377")
})
 */