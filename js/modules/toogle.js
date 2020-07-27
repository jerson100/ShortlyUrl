export const toogleMenu = () => {

    const $iconMenu = document.querySelector(".header__icon");
    const $nav = document.querySelector(".nav");;
    
    $iconMenu.addEventListener('click',e =>{

        $nav.classList.toggle("nav--active");

    });

};