const navBar = document.getElementById('nav-bar');
const menuBtn = document.getElementById('menu-btn');
const exitBtn =document.getElementById('exit-btn');

const menuActivity = () => {

    const visibility = navBar.getAttribute('data-visible');

    if(visibility === "false"){
        navBar.setAttribute("data-visible", true)
    }else if(visibility === "true"){
        navBar.setAttribute("data-visible", false)
    }
}

menuBtn.addEventListener('click', menuActivity );
exitBtn.addEventListener('click', menuActivity );