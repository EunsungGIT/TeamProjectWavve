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