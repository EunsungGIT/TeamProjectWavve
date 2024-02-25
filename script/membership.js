//클릭시 안올라가게 만들기+ 사이트로 가기
const warning = document.querySelectorAll('.warning a')
for(let j of warning){
    j.addEventListener('click',(e)=>{
        window.location.href = './customer_service.html'
        e.preventDefault();
    })
}
console.log(warning[3])
warning[3].addEventListener('click',(e)=>{
    window.location.href = './mypage.html'
    e.preventDefault();
})
const open_btn = document.querySelector('.open')
const event_img = document.querySelector('.event')
console.log (event_img)
let turn_function = true
open_btn.addEventListener('click',(e)=>{
    turn_function = !turn_function
    console.log(turn_function)
    let rotate_deg = turn_function ? 0 :180;
    open_btn.style.transform = 'rotate('+rotate_deg + 'deg)'
    if(turn_function ===false){
        event_img.style.height = '503px'
       
    }else{
        event_img.style.height = '110px'
        
    }
    e.preventDefault()
})

const pay_btn = document.querySelectorAll('body button')

for(let y of pay_btn){
    y.addEventListener('click',(e)=>{
        window.open("payment.html", "popup", "width=699,height=1377")
        e.preventDefault()
    })
}