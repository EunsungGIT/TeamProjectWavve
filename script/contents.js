/* 비슷한 영화 및 남녀노소 모두, 오늘은 애니 앞으로 */
var mySwiper = new Swiper('#wavve_images', { 
    loop:true,
    slidesPerView: 5,
    spaceBetween: 10,
    navigation:{
        nextEl:'#wavve_images .swiper-button-next',
        prevEl:'#wavve_images .swiper-button-prev',
    },
})

//일반자바

//제목변수
const menu_title = document.querySelectorAll ('.menu_title')
const contents_container = document.querySelectorAll('.container_contents')
console.log(contents_container[0])

// 숨기기
const hide = () =>{
    for(let i of contents_container ){i.style.display = 'none'}
}
hide()
contents_container[0].style.display = 'flex'
menu_title[0].classList.add('contants_border')

const border_remove = () =>{
    for(let r of menu_title){r.classList.remove('contants_border')}
}

menu_title.forEach((t,i)=>{
    console.log(t,i)
    t.addEventListener('click',()=>{
        border_remove()
        t.classList.add('contants_border')
        hide()
        contents_container[i].style.display = 'block'
    })
})
