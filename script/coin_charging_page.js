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

/* nomal_charging_coin.style.display = "none" */
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

/* 자세히보기 */

const coin_view_title = document.querySelector("#card_btm_more_noti > label")
const coin_view_content = document.querySelector(".card_btm_more_wrap")

coin_view_content.style.display = "none"

coin_view_title.addEventListener("click", ()=>{
   /*  coin_view_content.style.display = "block" */

    if(coin_view_content) {
        coin_view_content.style.display = "block"
    } else {
        coin_view_title.addEventListener("click", ()=>{
        coin_view_content.style.display = "none"  
    })
    }
});


/* 가격변환 */
