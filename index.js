const menuButton = document.getElementById('menu-btn');
const nav = document.getElementById('nav-bar');

menuButton.addEventListener('click', () => {

    const visibility = nav.getAttribute("data-visible")

    if( visibility === false){
        nav.setAttribute("data-visible", true);
    }else if ( visibility === true){
        nav.setAttribute("data-visible", false);
    }
})