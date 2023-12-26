const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    //setAttribute: html의 속성을 지정할 때 쓰는 함수
    searchInputEl.setAttribute('placeholder', '통합검색');
});

//blur : focus 해제되면
searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    //setAttribute: html의 속성을 지정할 때 쓰는 함수
    searchInputEl.setAttribute('placeholder', '');
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2023