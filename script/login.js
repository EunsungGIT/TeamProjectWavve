// sns링크로 들어가기
const sns_link =document.querySelectorAll ('.sns_join a')
for (let i = 0; i < sns_link.length; i++) { 
    sns_link[i].addEventListener('click', function(index) {
    return ()=> {
        let links = ['https://accounts.kakao.com/login/?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fproxy%3DeasyXDM_Kakao_cm62bqrepk9_provider%26ka%3Dsdk%252F1.43.1%2520os%252Fjavascript%2520sdk_type%252Fjavascript%2520lang%252Fko-KR%2520device%252FWin32%2520origin%252Fhttps%25253A%25252F%25252Fwww.wavve.com%26origin%3Dhttps%253A%252F%252Fwww.wavve.com%26response_type%3Dcode%26redirect_uri%3Dkakaojs%26state%3Do3a6w10skogpd04g0onujl%26through_account%3Dtrue%26client_id%3D30fc7e17b5c56a0ca1e861643292c203&talk_login=hidden#login','https://www.tworld.co.kr/web/login/tid-join','https://nid.naver.com/nidlogin.login?oauth_token=n7WUo4Wh8mg91RrlkQ&consumer_key=IMRF4m29ielhnUTZYGHL&logintp=oauth2&nurl=https%3A%2F%2Fnid.naver.com%2Foauth2.0%2Fauthorize%3Fresponse_type%3Dtoken%26state%3Dcdf70704-738d-4be8-b680-bd5d1d4b5dfc%26client_id%3DIMRF4m29ielhnUTZYGHL%26redirect_uri%3Dhttps%253A%252F%252Fwww.wavve.com%252Fmember%252Flogin_naver.html%26locale%3Dko_KR%26inapp_view%3D%26oauth_os%3D&locale=ko_KR&inapp_view=&svctype=','https://www.facebook.com/?locale=ko_KR','https://appleid.apple.com/auth/authorize?client_id=kr.co.captv.pooqV2.member&redirect_uri=https%3A%2F%2Fmember.wavve.com%2Fmobile%2Fsignup%2Fweb%2Fapple&response_type=code%20id_token&scope=email&response_mode=form_post&frame_id=c601c563-3361-4fe9-be8f-e8e276c70e75&m=11&v=1.5.5'];
        window.open(links[index], '_blank');
        event.preventDefault()
    };
    }(i));
}