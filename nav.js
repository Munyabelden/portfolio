const navBar = document.querySelector('#nav-bar');
const menuBtn = document.querySelector('#menu-btn');
const exitBtn = document.querySelector('#exit-btn');
const links = document.querySelectorAll('.nav-item');
    


const menuActivity = () => {
    const visibility = navBar.getAttribute('data-visible');
    if(visibility === 'false'){
        navBar.setAttribute('data-visible', true)
    }else if(visibility === 'true'){
        navBar.setAttribute('data-visible', false)
    }
}

menuBtn.addEventListener('click', menuActivity );
exitBtn.addEventListener('click', menuActivity );

links.forEach( link => {
    const visibility = navBar.getAttribute('data-visible');
    link.addEventListener('click', () => {
        navBar.setAttribute('data-visible', false)
    })
})