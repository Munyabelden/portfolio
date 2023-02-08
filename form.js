let id = (id) => document.getElementById(id);
const form = document.getElementById('mobile-form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const client = document.getElementById('client-side');

form.addEventListener('submit', () => {
    const error = [];

    if(username.ariaValueMax.trim() == '')[
        client.innerHTML =`<p class="error"><i class="fa-solid fa-circle-exclamation"></i></p>`;
        error.push(client)
    ]

    if(error.length > 0){
        e.preventDefault();
    }
})
