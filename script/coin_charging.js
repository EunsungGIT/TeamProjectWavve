/* 탭------------------------------------------------------------ */
const normal_tap = document.querySelector(".tab_nomal")
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

/* 스와이퍼  */
const my_swiper = new Swiper('.crad_container', { 
    // autoplay:{delay:3000},
    slidesPerView: 1, //슬라이드 한번에 1개씩 보이기
    centeredSlides:true, // 슬라이드의 기준을 가운데부터 시작하도록 설정하기
    loop:true,
    pagination:{
        el:'.swiper-pagination'
    },
    navigation:{
        nextEl:'.crad_container .swiper-button-next',
        prevEl:'.crad_container .swiper-button-prev',
    },
})


/* 일반충전 & 자동충전 화면 전환 */
const charging_tap = document.querySelectorAll(".coin_charging_middle > a")
const normal_charging_tap = document.querySelector("#frm_payment1")
const auto_charging_tap = document.querySelector("#frm_payment2")


/* 초기 내용 숨기기 */
auto_charging_tap.style.display = "none"

/* 초기값 활성화 시키기 active */
charging_tap[0].parentElement.classList.add("active")

charging_tap[0].addEventListener("click", ()=> {
    normal_charging_tap.style.display = "block"
    auto_charging_tap.style.display = "none"
})

charging_tap[1].addEventListener("click", ()=>{
    auto_charging_tap.style.display = "block"
    normal_charging_tap.style.display = "none"
})

/* 빠른 결제 & 다른 결제 수단  작업중 ---------------------------------------------*/
/* card_pay_ment_box 빠른결제 아래로 전부 */
/* card_btm_content 다른 결제수단 아래로 전부 */

/* 빠른 결제 박스 */
const quick_payment_box = document.querySelector(".card_pay_ment_box")
/* 다른 결제 박스 */
const different_payment_box = document.querySelector(".card_btm_content")

/* 일반충천 - > 빠른결제부단 탭*/
const quick_pay_btn = document.querySelector("#normal_pay_btn")
/* 일반충천 - > 다른 결제수단 탭 */
const other_pay_btn = document.querySelector(".other_pay > label")

console.log(other_pay_btn)

/* 초기 내용 숨기기 */
different_payment_box.style.display= "none"

quick_pay_btn.parentElement.classList.add("active")


other_pay_btn.addEventListener("click", ()=> {
    console.log("성공")
    quick_payment_box.style.display ="none"
    different_payment_box.style.display = "flex"
})


quick_pay_btn.addEventListener("click", ()=> {
    console.log("성공")
    different_payment_box.style.display = "none"
    quick_payment_box.style.display ="flex"
})
/* 일반충전 끝 --------------------------------------------------------------------*/

/* 자동충전 시작------------------------------------------------------------------- */


/* 빠른 결제 박스 */
const auto_quick_payment_box = document.querySelector("#frm_payment2 .card_pay_ment_box")
/* 다른 결제 박스 */
const auto_different_payment_box = document.querySelector("#frm_payment2 .card_btm_content")

/* 빠른 결제수단 탭 */
const auto_quick_pay_btn = document.querySelector("#auto_pay_btn")
/* 다른 결제수단 탭 */
const auto_other_pay_btn = document.querySelector("#frm_payment2 .other_pay > label ")

auto_different_payment_box.style.display = "none"

auto_quick_pay_btn.classList.add("active")

auto_other_pay_btn.addEventListener("click", ()=> {
    console.log("dddddd")
    auto_quick_payment_box.style.display = "none"
    auto_different_payment_box.style.display = "flex"
})

auto_quick_pay_btn.addEventListener("click",()=>{
    console.log("dddddd")
    auto_different_payment_box.style.display = "none"
    auto_quick_payment_box.style.display = "flex"
})


/* 자동충전 끝 */
/* 빠른 결제 & 다른 결제 수단 끝 -------------------------------------------------------*/

/* 카드등록 */
const card_register = document.querySelector(".card_wrap > .card_register_img")
console.log(card_register)

card_register.addEventListener("click", ()=>{
    window.confirm("카드 등록창으로 이동합니다.")
})

/* 일반충전 & 자동충전 화면 전환  끝*/

/* 결제내용- > 충전코인리스트 */

const coin_price = [3000, 5000, 10000, 30000]
const coin_price_span_nomal = document.querySelectorAll("#frm_payment1 .charging_coin_list span")
const coin_price_span_auto = document.querySelectorAll("#frm_payment2 .charging_coin_list span")
/* 결과금액 */

/* 일반충전 */
const nomal_coin_result = document.querySelector("#frm_payment1 .price")

console.log(nomal_coin_result)
console.log(coin_price_span_nomal,coin_price_span_auto)

coin_price_span_nomal.forEach((t,i)=>{
    console.log(t,i)
    t.addEventListener("click", ()=>{
        /* span 클릭 시  */
        console.log(i)
        console.log(coin_price[i])
        coin_price[i]
/*         nomal_coin_result */
       /*  getElementById *//* ("coin_price_span_nomal").innerHTML="dddd" */   
        nomal_coin_result.innerHTML = coin_price[i].toLocaleString("ko-kr")
    })
})


/* 자동충전 */
const auto_coin_result = document.querySelector("#frm_payment2 .price")
    console.log(auto_coin_result)

coin_price_span_auto.forEach((t,i)=>{
    t.addEventListener("click", ()=> {
        console.log(coin_price[i])
        coin_price[i]
        auto_coin_result.innerHTML = coin_price[i].toLocaleString("ko-kr")
    })
})


/* 
menu_title.forEach((t,i)=>{
    console.log(t,i)
    t.addEventListener('click',()=>{
        border_remove()
        t.classList.add('contants_border')
        hide()
        contents_container[i].style.display = 'block'
    })
})
*/

/* 다른결제 수단 blue 클릭 이벤트 */

const card_btm_content_box = document.querySelectorAll(".card_btm_content li > a");
/* 이미지 변경 변수 생성 */
const coin_abox_img = document.querySelector("card_btm_content a > img")
console.log(card_btm_content_box,coin_abox_img)

// card_btm_content_box.forEach((t,i)=>{
//     console.log(t,i)
//     t.addEventListener("click",()=>{
//         t.classList.add("card_btm_content_box_style")
//         card_btm_content_box[i].style.background = "#1351f9"
//         card_btm_content_box[i].style.color = "#fff"
//         card_btm_content_box[i].style.border = "#1351f9"
//     })
// })

card_btm_content_box.forEach((t, i) => {
    t.addEventListener("click", () => {
        // 클릭되지 않은 박스에 대한 스타일 초기화
        card_btm_content_box.forEach(coin_abox => {
            if (coin_abox !== t) { // 클릭된 박스 아닌 경우에만 초기화
                coin_abox.classList.remove("card_btm_content_box_style");
                coin_abox.style.background = "initial";
                coin_abox.style.color = "initial";
                // 보더 스타일은 초기화하지 않음
            }
        });

        // 클릭한 박스에 스타일 적용
        t.classList.add("card_btm_content_box_style");
        t.style.background = "#1351f9";
        t.style.color = "#fff";
        t.style.border = "1px solid #5e5e5e"; // 클릭한 요소의 border 스타일 설정
        event.preventDefault(); // 위로 올라가는 동작을 방지해준다.
        coin_abox_img[i].src = "./images/holding_coin/coin_icon-card-on.png";
    });
});