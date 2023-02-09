
const popUpCard = document.querySelectorAll('[data-modal-target]');
const cardElement = document.querySelector('.card');

const cardArray =  [
  {
    id: 'card-1',
    title: 'Tonic',
    list: {
      title: 'canopy',
      dev: 'Backend-dev',
      year: '2015'
    },
    images: {
      large: './images/Portfolio3x.png',
      small: './images/Portfolio.jpg'
    },
    information: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    technologies: {
      html: 'html',
      css: 'css',
      javascript: 'javascript',
      ruby: 'ruby on rails',
      github: 'github',
      bootstrap: 'bootstrap'
    },
    live: 'https://munyabelden.github.io/',
    source: 'https://github.com/Munyabelden/munyabelden.github.io'
  },
  {
    id: 'card-2',
    title: 'Multi-post Stories',
    list: {
      title: 'canopy',
      dev: 'Backend-dev',
      year: '2015'
    },
    images: {
      large: './images/Portfolio3x.png',
      small: './images/Portfolio.jpg'
    },
    information: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    technologies: {
      html: 'html',
      css: 'css',
      javascript: 'javascript',
      ruby: 'ruby on rails',
      github: 'github',
      bootstrap: 'bootstrap'
    },
    live: 'https://munyabelden.github.io/',
    source: 'https://github.com/Munyabelden/munyabelden.github.io'
  },
  {
    id: 'card-1',
    title: 'Tonic',
    list: {
      title: 'canopy',
      dev: 'Backend-dev',
      year: '2015'
    },
    images: {
      large: './images/Portfolio3x.png',
      small: './images/Portfolio.jpg'
    },
    information: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    technologies: {
      html: 'html',
      css: 'css',
      javascript: 'javascript',
      ruby: 'ruby on rails',
      github: 'github',
      bootstrap: 'bootstrap'
    },
    live: 'https://munyabelden.github.io/',
    source: 'https://github.com/Munyabelden/munyabelden.github.io'
  },
  {
    id: 'card-1',
    title: 'Tonic',
    list: {
      title: 'canopy',
      dev: 'Backend-dev',
      year: '2015'
    },
    images: {
      large: './images/Portfolio3x.png',
      small: './images/Portfolio.jpg'
    },
    information: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    technologies: {
      html: 'html',
      css: 'css',
      javascript: 'javascript',
      ruby: 'ruby on rails',
      github: 'github',
      bootstrap: 'bootstrap'
    },
    live: 'https://munyabelden.github.io/',
    source: 'https://github.com/Munyabelden/munyabelden.github.io'
  }
]


function createElement(data)  {
  document.getElementById(data[0].id).innerHTML =`
      <div class="card-details " > 
      <div class="card-intro">
          <div class="card-head">
          <button data-targets=".card" type="button" class="close-card" >&times;</button>
              <h2 class="card-title">
                  ${data[0].title}
              </h2>

              <ul class="card-canopy">
                <li class="can-card">${data[0].list.title} </li>
                <li class="card-item"> 
                    <span>• </span>  ${data[0].list.dev} </span>
                </li>
                <li class="card-item">${data[0].list.year} </li>
              </ul>
          </div>
          <div class="card-images">
              <img class="card-image" src="${data[0].images.large} " alt="Snapshot">
              <img class="card-img" src="${data[0].images.small} "  alt="Snapshot">
          </div>                 
      </div>
      <div class="card-information">
          <div class="card-description">      
              <p class="show"> ${data[0].information}
              </p>
              <p class="hidden">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
          </div>
          <div class="links">
              <div class="card-links">
                  <ul class="card-links-visible">
                      <li class="card-link"><a href="#">${data[0].technologies.html}</a></li>
                      <li class="card-link"><a href="#">${data[0].technologies.css}</a></li>
                      <li class="card-link"><a href="#">${data[0].technologies.javascript}</a></li>
                  </ul>
                      <ul class="card-links-hidden">
                          <li class="card-link hidden"><a href="#">${data[0].technologies.ruby}</a></li>
                          <li class="card-link hidden"><a href="#">${data[0].technologies.bootstrap}</a></li>
                          <li class="card-link hidden"><a href="#">${data[0].technologies.github}</a></li>
                      </ul>
              </div>
              <div class="buttons">
                  <a href="${data[0].live}" target="_blank" class="card-button">
                      see live  <img src="./images/git.svg" alt="github ico">
                  </a>
                  <a href="${data[0].source}" target="_blank" class="card-button">
                      see source <img src='./images/Live.svg' alt="live icon">
                  </a>
              </div>
          </div>
      </div>
    </div>
    </div>`
}

popUpCard.forEach(button => {
      createElement(cardArray);
      button.addEventListener('click', () => {
      const card = document.querySelector(button.dataset.modalTarget)
      popUp(card)
      const close = document.querySelector('.close-card');
      close.addEventListener('click',  () => {
        cardElement.classList.remove('active')
      });
    })
  })

  function popUp(card) {
    if (card == null) return
    card.classList.add('active')
 }
 
