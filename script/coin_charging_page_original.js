/* 상단 메인 슬라이드 */
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

/* 코인 충전 페이지 */

const coin_charging_title = document.querySelectorAll(".coin_charging_tap li > a")
const auto_coin_charging = document.querySelector(".auto_charging_coin")
const nomal_charging_coin =document.querySelector(".nomal_charging_coin")

/* 초기 내용 숨기기 */

auto_coin_charging.style.display = "none"


/* 초기값 활성화 시키기 active */

coin_charging_title[0].parentElement.classList.add("active")

coin_charging_title[0].addEventListener("click", ()=> {
    nomal_charging_coin.style.display = "block"
    auto_coin_charging.style.display = "none"

    coin_charging_title[0].parentElement.classList.add("active");
    coin_charging_title[1].parentElement.classList.remove("active")
})

coin_charging_title[1].addEventListener("click", ()=> {
    auto_coin_charging.style.display = "block"
    nomal_charging_coin.style.display = "none"

    coin_charging_title[0].parentElement.classList.remove("active");
    coin_charging_title[1].parentElement.classList.add("active")
})


/* 탭------------------------------------------------------------ */
const tap_taget = document.querySelector(".tab_title active")
const not_tap_taget = document.querySelector(".tab_title")

tap_taget.classList.add("coin_mypage_border")



not_tap_taget.addEventListener("click",()=>{
    not_tap_taget.classList.add("coin_mypage_border")
    tap_taget.classList.remove("coin_mypage_border")
})

tap_taget.addEventListener("click",()=>{
    tap_taget.classList.add("coin_mypage_border")
    not_tap_taget.classList.remove("coin_mypage_border")
})
/* 탭 끝 */

/* 가격변환 */


const price_blue_btn = document.querySelector(".radio_btn")

document.querySelectorAll(".price_blue_btn").forEach(radio_btn => {
    price_blue_btn.addEventListener("click",()=>{

    });
})

/* 충전할 코인 선택 */

/* 동일한 인덱스의 배열값 */

const coin_total = document.querySelector(".table_total_price #total_span")
const btn_input = document.querySelectorAll(".radio_btn")

/* 
blue_price_btn[4].addEventListener("click", ()=>{
    btn_input[4].value = coin_total.innerHTML
    console.log(btn_input[4])

for(let i of btn_input){
    i.addEventListener('click',()=>{
        console.log(i.value)
    })
}
blue_price_btn[0].addEventListener("click", ()=>{
    btn_input[0].value = coin_total.innerHTML
})
 */