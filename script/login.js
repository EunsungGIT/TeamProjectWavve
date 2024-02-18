const popup =document.querySelector('.popup')
popup.style.display='none'
const join_btn = document.querySelector('#join_btn')
const user_id=document.querySelector('#user_id')
const user_pw=document.querySelector('#user_pw')
const id_error=document.querySelector('.id_error')
const pw_error=document.querySelector('.pw_error')
const icon_img = document.querySelector('.icon')


console.log(icon_img)

  
join_btn.addEventListener('click',()=>{
    if(user_id.value ===''){
        id_error.innerHTML='5~50자의 이메일 형식으로 입력해주세요.'
        id_error.style.color='#ff27a3'
        icon_img.src = './images/login/icon_error_pink.png'
    }else if(user_pw.value === ''){
        pw_error.innerHTML='비밀번호는 8~20자 이내로 영문 대소문자, 숫자, 특수문자 중 3가지 이상 혼용하여 입력해 주세요.연속된 숫자 또는 4자 이상의 동일 문자는 비밀번호로 사용할 수 없습니다.'
        pw_error.style.color='#ff27a3'
    }else{
        popup.style.display='block'
    }
})



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

// sns링크로 들어가기
const sns_link =document.querySelectorAll ('.sns_join a')
for (let i = 0; i < sns_link.length; i++) { 
    sns_link[i].addEventListener('click', function(index) {
      return ()=> {
        let links = ['https://accounts.kakao.com/login/?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fproxy%3DeasyXDM_Kakao_cm62bqrepk9_provider%26ka%3Dsdk%252F1.43.1%2520os%252Fjavascript%2520sdk_type%252Fjavascript%2520lang%252Fko-KR%2520device%252FWin32%2520origin%252Fhttps%25253A%25252F%25252Fwww.wavve.com%26origin%3Dhttps%253A%252F%252Fwww.wavve.com%26response_type%3Dcode%26redirect_uri%3Dkakaojs%26state%3Do3a6w10skogpd04g0onujl%26through_account%3Dtrue%26client_id%3D30fc7e17b5c56a0ca1e861643292c203&talk_login=hidden#login','https://auth.skt-id.co.kr/auth/authorize.do?client_id=271d4bb5-7350-4e57-8816-0895b040d793&client_secret=eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2R0NNIn0.g2x6ajV-AoC2Mxowp_XoZXc5k-qynXldxU1xTgVjYfxikuFm4eDFXg.wnRxGWjGCEknUuM-.tsw-mEifXgN617c3GCs8YHg_LSIuz5B6yGaSDlrBWHjVPOQTWL-xMjJ9wUGJ1FfK2kvcI8qoSsq6.s1GP7ExtqyyCGDkk8LvADQ&redirect_uri=https%3A%2F%2Fwww.wavve.com%2Ftcallback.html&scope=openid&response_type=id_token%20token&state=81852&nonce=337359&client_type=WEB&service_type=14&popup_request_yn=Y&chnl_q=aHR0cHM6Ly9hdXRoLnNrdC1pZC5jby5rci9zc28vd2ViL3YxL3Nzb2xvZ291dC5kbz9jbGllbnRfaWQ9MjcxZDRiYjUtNzM1MC00ZTU3LTg4MTYtMDg5NWIwNDBkNzkzJnJlZGlyZWN0X3VyaT1odHRwcyUzQSUyRiUyRnd3dy53YXZ2ZS5jb20lMkZ0Y2FsbGJhY2suaHRtbCZjbGllbnRfdHlwZT1XRUI','https://nid.naver.com/nidlogin.login?oauth_token=n7WUo4Wh8mg91RrlkQ&consumer_key=IMRF4m29ielhnUTZYGHL&logintp=oauth2&nurl=https%3A%2F%2Fnid.naver.com%2Foauth2.0%2Fauthorize%3Fresponse_type%3Dtoken%26state%3Dcdf70704-738d-4be8-b680-bd5d1d4b5dfc%26client_id%3DIMRF4m29ielhnUTZYGHL%26redirect_uri%3Dhttps%253A%252F%252Fwww.wavve.com%252Fmember%252Flogin_naver.html%26locale%3Dko_KR%26inapp_view%3D%26oauth_os%3D&locale=ko_KR&inapp_view=&svctype=','https://www.facebook.com/?locale=ko_KR','https://appleid.apple.com/auth/authorize?client_id=kr.co.captv.pooqV2.member&redirect_uri=https%3A%2F%2Fmember.wavve.com%2Fmobile%2Fsignup%2Fweb%2Fapple&response_type=code%20id_token&scope=email&response_mode=form_post&frame_id=c601c563-3361-4fe9-be8f-e8e276c70e75&m=11&v=1.5.5'];
        window.open(links[index], '_blank');
        event.preventDefault()
      };
    }(i));
  }
// 팝업 X클릭시 닫기
const close_btn =document.querySelector('.close')
close_btn.addEventListener ('click',()=>{
    popup.style.display='none'
    event.preventDefault()
})

const checking_all = document.getElementById('checking')
const check_sub = document.querySelectorAll('.check_sub')
console.log(checking_all,check_sub)

checking_all.addEventListener('click',()=>{
    for(let i =0 ; i < check_sub.length;i++){
        check_sub[i].checked = checking_all.checked;
    }
})
