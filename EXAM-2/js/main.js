const burger = document.querySelector('.burger')
const nav__list = document.querySelector('.nav__list_mobile')

burger.addEventListener("click", () => {
    // if(burger.classList.contains('active')) {
    //     nav__list.classList.remove('active')
    // } else {
    //     nav__list.classList.remove('active')
    // }
    nav__list.classList.toggle('active')
    burger.classList.toggle('active')
})