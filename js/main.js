
//오른쪽 팝업

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll' , _.throttle(function(){
    console.log(window.scrollY)
    if(window.scrollY > 500){
        //배지 요소 숨기기
       // gsap.to(요소, 지속시간, 옵션)
        gsap.to(badgeEl, .6, {
            opacity:0,
            display: 'none'
        });
        //버튼 보이기!
        gsap.to(toTopEl  , .2 , {
            x:0
        });

    } else{
        //배지 요소 다시 나타나기
        gsap.to(badgeEl, .6, {
            opacity:1,
            display: 'block'
        });
        //버튼 숨기기!
        gsap.to(toTopEl , .2 , {
            x:100
        });
    }
}, 300));
//_.throttle(함수, 시간) = 스크롤이 될 때마다 실행되는 수많은 함수를 제어할 수 있음


toTopEl.addEventListener('click' , function(){
    gsap.to(window, .7, {
        scrollTo:0
    });
})


const fadeEls = document.querySelectorAll('.visual .fade-in')

fadeEls.forEach(function(fadeEl, index){
    gsap.to(fadeEl, 1, {
        delay:(index + 1)*.7,
        opacity:1
    })
});

//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction:'vertical',
    autoplay:true,
    loop:true,
});
new Swiper('.promotion .swiper-container', {
    slidesPerView:3, //한번에 보여줄 슬라이드 개수
    spaceBetween:10, //슬라이드 사이 여백
    centeredSlides:true, //1번 슬라이드가 중앙에 보이기
    loop:true,
    // autoplay:{
    //     delay:500
    // }
    pagination:{
        el: '.promotion .swiper-pagination', //페이지 선택 요소 선택자
        clickable:true, //사용자가 페이지 번호 요소 제어할 수 있는지
    },
    navigation:{
        prevEl:'.promotion .swiper-prev',
        nextEl:'.promotion .swiper-next'
    }
});

new Swiper('.awards .swiper-container', {
    autoplay:true,
    loop:true,
    spaceBetween:30,
    slidesPerView:5,
    navigation:{
        prevEl:'.awards .swiper-prev',
        nextEl:'.awards .swiper-next'
    }
})


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false; //프로모션이 숨겨졌니 = false 안 숨겨졌다

promotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion // 값이 반대가 되게 만들어 달라는 !~~ = 숨겨졌다고 함
    if(isHidePromotion){
        //숨김 처리
        promotionEl.classList.add('hide');
    } else{
        //보임 처리
        promotionEl.classList.remove('hide');
    }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size){
    gsap.to(
        selector, // 선택자
        random(1.5, 2.5), //애니메이션 동작 시간
        {
        y:size,
        repeat: -1, //무한반복
        yoyo:true, //위아래로 자동
        ease: "power1.inOut",
        dealy:random(0, delay)
    }
    );
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function(spyEl){
    //Scene: 감지해 주는 메소드
    new ScrollMagic
        .Scene({
            triggerElement:spyEl, //보여짐 여부를 감시할 요소를 지정
            triggerHook:.8, // 어떠한 지점에서 감시하겠다는 지점
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller()); // addTo::컨트롤러를 추가하기 위해 필요

})

