
const popUpCard = document.querySelectorAll('[data-modal-target]');

const cardArray = {
      id: 'card',
      title: 'Tonic',
      list: {
        canopy: 'canopy',
        dev: 'Backend-Dev',
        year: '2015'
      },
      images: 'images\Portfolio3x.png',
      links: {
        html: 'html',
        css:  'css',
        js: 'javascript',
        ruby: 'ruby on rail',
        bootstrap: 'bootstrap',
        github: 'github'
      },
      buttons: {
        live: 'see live',
        source: 'see source'
      },
      media: {
        live: 'images\git.svg',
        source: 'images\Live.svg'
      }
    }

popUpCard.forEach(button => {
    createCard();
    button.addEventListener('click', () => {
      const card = document.querySelector(button.dataset.modalTarget)
      popUp(card)
    })
  })

  function createCard(){

    document.getElementById(cardArray.id).innerHTML = `
    <div class="card-details " > 
        <div class="card-intro">
            <div class="card-head">
                <h2 class="card-title">
                    ${cardArray.title} <button data-close type="button" class="close-card">&times;</button>
                </h2>

                <ul class="card-canopy">
                  <li class="can-card">${cardArray.list.canopy}</li>
                  <li class="card-item"> 
                      <span>• </span>  ${cardArray.list.dev} <span>• </span>
                  </li>
                  <li class="card-item">${cardArray.list.year}</li>
                </ul>
            </div>
            <div class="card-images">
                <img class="card-image" src="${cardArray.images}" alt="Snapshot">
            </div>                 
        </div>
        <div class="card-information">
            <div class="card-description">      
                <p class="show">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </p>
                <p class="hidden">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
            </div>
            <div class="links">
                <div class="card-links">
                    <ul class="card-links-visible">
                        <li class="card-link"><a href="#">${cardArray.links.html}</a></li>
                        <li class="card-link"><a href="#">${cardArray.links.css}</a></li>
                        <li class="card-link"><a href="#">${cardArray.links.js}</a></li>
                    </ul>
                        <ul class="card-links-hidden">
                            <li class="card-link hidden"><a href="#">${cardArray.links.ruby}</a></li>
                            <li class="card-link hidden"><a href="#">${cardArray.links.bootstrap}</a></li>
                            <li class="card-link hidden"><a href="#">${cardArray.links.github}</a></li>
                        </ul>
                </div>
                <div class="buttons">
                    <a href="" class="card-button">
                        ${cardArray.buttons.live}  <img src="${cardArray.media.live}" alt="live icon">
                    </a>
                    <a href="" class="card-button">
                    ${cardArray.buttons.source} <img src="${cardArray.media.source}" alt="github icon">
                    </a>
                </div>
            </div>
        </div>
    </div>`
  }

  function popUp(card) {
    if (card == null) return
    card.classList.add('active')
 }

<<<<<<< HEAD
 const closeCard = document.querySelectorAll('[data-close]'); 

 closeCard.forEach(button => {
   createCard();
=======
 closeCard.forEach(button => {
>>>>>>> aea3f3c20f4c10358e2ec36f466171e4decf4f4b
    button.addEventListener('click', () => {
      const card = button.closest('.card')
      remove(card)
    })
  })

 function remove(card){
    if(card == null)return
    card.classList.remove('active')
 }