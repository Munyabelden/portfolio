 "use strict";
 const cardArray = [ 
  {
    name: 'Tonic',
    feature: 'CANOPY',
    background: '• Back-end Dev •',
    year: '2015',
    image: './images/Portfolio.jpg',
    large: './images/Portfolio3x.png',
    description:'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    message:' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.',
    html: 'html',
    css: 'css',
    javascript: 'javascript',
    ruby: 'ruby on rails',
    bootstrap: 'bootstrap',
    github: 'github',
    linkLive: 'https://github.com/Munyabelden/munyabelden.github.io/',
    linkSource: 'https://github.com/Munyabelden/munyabelden.github.io',
  },
  {
    name: 'Multi-Post Stories',
    feature: 'FACEBOOK',
    background: '• Full Stack Dev •',
    year: '2015',
    image: './images/shoot.svg',
    large: './images/portfolio3x.png',
    description:'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends..',
    message:' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.',
    html: 'html',
    css: 'css',
    javascript: 'javascript',
    ruby: 'ruby on rails',
    bootstrap: 'bootstrap',
    github: 'github',
    linkLive: 'https://github.com/Munyabelden/munyabelden.github.io',
    linkSource: 'https://github.com/Munyabelden/munyabelden.github.io',
  },
  {
    name: 'Facebook 360',
    feature: 'FACEBOOK',
    background: '• Full Stack Dev •',
    year: '2015',
    image: './images/Snap.jpg',
    large: './images/Portfolio3x.png',
    description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    message:' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.',
    html: 'html',
    css: 'css',
    javascript: 'javascript',
    ruby: 'ruby on rails',
    bootstrap: 'bootstrap',
    github: 'github',
    linkLive: 'https://github.com/Munyabelden/munyabelden.github.io',
    linkSource: 'https://github.com/Munyabelden/munyabelden.github.io',
  },
  {
    name: 'Uber Navigation',
    feature: 'Uber',
    background: '• Lead Developer •',
    year: '2018',
    image: './images/available.jpg',
    large: './images/available1.png',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    message:' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.',
    html: 'html',
    css: 'css',
    javascript: 'javascript',
    ruby: 'ruby on rails',
    bootstrap: 'bootstrap',
    github: 'github',
    linkLive: 'https://github.com/Munyabelden/munyabelden.github.io',
    linkSource: 'https://github.com/Munyabelden/munyabelden.github.io/',
  },
];

const startingPoint = document.querySelector('.intro');

 function createElement() {
  startingPoint.insertAdjacentHTML(
    'afterend',
    ` <div class="card">
        <div class="card-details">
          <div class="card-intro">
              <div class='card-head'>
                  <h2 class='card-title'></h2>
                  <button data-targets=".card" type="button" class="close-card" >&times;</button>
              </div>
                  <ul class="card-canopy">
                      <li class="feature can-card"></li>
                      <li class=" background card-item"></li>
                      <li class="year card-item"> </li>
                  </ul>
              <div class="card-images">  
                <img class="image-small card-img" src="" alt="snapshot"></img>
                <img class="image-large hidden" src="" alt="snapshot"></img>
              </div>
            </div>
            <div class="card-inform">
              <div class="card-description">
                <p class="show card-description-small">
                  </p>
                  <p class="information hidden">
                  </p>  
              </div>
          <div class="card-button-links">          
            <div class="card-links">
              <ul class=" card-link-visible ">
                <li class="card-link-1 card-link"></li>
                <li class="card-link-2 card-link"></li>
                <li class="card-link-3 card-link"></li>
              </ul>
              <ul class="card-link-hidden ">
                <li class="card-link-4 card-link hidden"></li>
                <li class="card-link-5 card-link hidden""></li>
                <li class="card-link-6 card-link hidden"></li>
              </ul>
            </div>
            <div class='buttons'>
              <a href='' target="_blank"class="btn link live card-button">
                See Live <img src="./images/git.svg" alt="github ico">
              </a>
              <a href='' target="blank" class="btn link source card-button">
                See Source <img src='./images/Live.svg' alt="live icon">
              </a>
            </div>
          </div>  
        </div>       
      </div>
    </div>`
  );
}

document.addEventListener('DOMContentLoaded', () => {
  createElement();

  const popUpCard = document.querySelectorAll('.column-button');
  const close = document.querySelector('.close-card');
  const card = document.querySelector('.card-details');
  const background = document.querySelector('.card');
  const name = document.querySelector('.card-title');
  const feature = document.querySelector('.feature');
  const title = document.querySelector('.background');
  const year = document.querySelector('.year');
  const imageSmall = document.querySelector('.image-small');
  const imageLarge = document.querySelector('.image-large');
  const description = document.querySelector('.card-description-small');
  const information = document.querySelector('.information');
  const code1 = document.querySelector('.card-link-1');
  const code2 = document.querySelector('.card-link-2');
  const code3 = document.querySelector('.card-link-3');
  const code4 = document.querySelector('.card-link-4');
  const code5 = document.querySelector('.card-link-5');
  const code6 = document.querySelector('.card-link-6');
  const live = document.querySelector('.live');
  const source = document.querySelector('.source');

  const closeCard = () => {
    card.classList.remove('active');
    background.classList.remove('active');
  };

  function updateCardContent(index) {
    const cardData = cardArray[index];
    name.textContent = cardData.name;
    feature.textContent = cardData.feature;
    title.textContent = cardData.background;
    year.textContent = cardData.year;
    imageSmall.setAttribute('src', `${cardData.image}`);
    imageLarge.setAttribute('src', `${cardData.large}`);
    description.textContent = `${cardData.description}`;
    information.textContent = `${cardData.message}`;
    code1.textContent = `${cardData.html}`;
    code2.textContent = `${cardData.css}`;
    code3.textContent = `${cardData.javascript}`;
    code4.textContent = `${cardData.ruby}`;
    code5.textContent = `${cardData.bootstrap}`;
    code6.textContent = `${cardData.github}`;

    live.setAttribute('href', cardData.linkLive);
    source.setAttribute('href', cardData.linkSource);

    card.classList.add('active');
    background.classList.add('active');
 }

  popUpCard.forEach((button, index) => {
    button.addEventListener('click', () => {
      updateCardContent(index);
    });
  });

  close.addEventListener('click', closeCard);
});
