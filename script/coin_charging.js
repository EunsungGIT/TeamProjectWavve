/* 탭------------------------------------------------------------ */
const normal_tap = document.querySelector(".tab_active")
const auto_tap = document.querySelector(".tab_auto")
console.log(normal_tap,auto_tap)
normal_tap.classList.add("coin_mypage_border")

/* 자동충전 */
auto_tap.addEventListener("click",()=>{
    auto_tap.classList.add("coin_mypage_border")
    normal_tap.classList.remove("coin_mypage_border")
})

/* 일반충전 */
normal_tap.addEventListener("click",()=>{
    normal_tap.classList.add("coin_mypage_border")
    auto_tap.classList.remove("coin_mypage_border")
})
/* 탭 끝 */

const normal_charging = document.querySelector("#frm_payment1")