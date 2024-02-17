const popup =document.querySelector('.popup')
popup.style.display='none'
const join_btn = document.querySelector('#join_btn')
const user_id=document.querySelector('#user_id')
const user_pw=document.querySelector('#user_pw')
const id_error=document.querySelector('.id_error')
const pw_error=document.querySelector('.pw_error')
const icon_img = document.querySelector('.icon')
console.log(id_error,pw_error)
console.log(user_id,user_pw)

  
join_btn.addEventListener('click',()=>{
    if(user_id.value ===''){
        id_error.innerHTML='5~50자의 이메일 형식으로 입력해주세요.'
        id_error.style.color='#ff27a3'
    }else if(user_pw.value === ''){
        pw_error.innerHTML='비밀번호는 8~20자 이내로 영문 대소문자, 숫자, 특수문자 중 3가지 이상 혼용하여 입력해 주세요.연속된 숫자 또는 4자 이상의 동일 문자는 비밀번호로 사용할 수 없습니다.'
        pw_error.style.color='#ff27a3'
    }else{
        popup.style.display='block'
    }
})

if(user_id.value !=='' && user_pw.value !== '' ){
    join_btn.classList.add('active')
}



// show클릭시 타입바꾸기
const show =document.querySelector('#pw_btn')
show.addEventListener('click',()=>{
    const type = user_pw.type
    if(type === 'password'){
        user_pw.type = 'text'
        show.innerHTML = 'hide'
    }else{
        user_pw.type = 'password';
        show.innerHTML = 'show'
    }
})


// 팝업 X클릭시 닫기
const close_btn =document.querySelector('.close')
close_btn.addEventListener ('click',()=>{
    popup.style.display='none'
})


// sns링크로 들어가기
const sns_link =document.querySelectorAll ('.sns_join a')
console.log(sns_link[0],sns_link[1])
// sns_link.addEventListener('click',()=>{
//     window.open('https://accounts.kakao.com/login/?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fproxy%3DeasyXDM_Kakao_hch6dsmj87_provider%26ka%3Dsdk%252F1.43.1%2520os%252Fjavascript%2520sdk_type%252Fjavascript%2520lang%252Fko-KR%2520device%252FWin32%2520origin%252Fhttps%25253A%25252F%25252Fmember.wavve.com%26origin%3Dhttps%253A%252F%252Fmember.wavve.com%26response_type%3Dcode%26redirect_uri%3Dkakaojs%26state%3Dfzb66ha6q0775nvin7oh0u%26through_account%3Dtrue%26client_id%3D30fc7e17b5c56a0ca1e861643292c203&talk_login=hidden#login','_blank')
// })
