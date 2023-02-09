 const cardArray = [ 
  {
    name: 'Tonic',
    feature: 'CANOPY',
    background: '• Back-end Dev •',
    year: '2015',
    image: './images/Portfolio.jpg',
    large: './images/Portfolio3x.png',
    description:'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends. Lorem Ipsum is simply dummy text of the printing and typesetting industry',
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
    large: './images/portfolio4x.png',
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
    `  <div class="card">
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
                        <a href='' target="_blank"class="btn link live card-button">See Live <img src="./images/git.svg" alt="github ico">
                        </a>
                        <a href='' target="blank" class="btn link source card-button">See Source <img src='./images/Live.svg' alt="live icon">
                        </a>
                    </div>
                 </div>  
             </div>       
          </div>
        </div>`,
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

  popUpCard.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.id === '0') {
        name.textContent = `${cardArray[0].name}`;
        feature.textContent = `${cardArray[0].feature}`;
        title.textContent = `${cardArray[0].background}`;
        year.textContent = `${cardArray[0].year}`;
        imageSmall.setAttribute('src', `${cardArray[0].image}`);
        imageLarge.setAttribute('src', `${cardArray[0].large}`);
        description.textContent = `${cardArray[0].description}`;
        information.textContent = `${cardArray[0].message}`;
        code1.textContent = `${cardArray[0].html}`;
        code2.textContent = `${cardArray[0].css}`;
        code3.textContent = `${cardArray[0].javascript}`;
        code4.textContent = `${cardArray[0].ruby}`;
        code5.textContent = `${cardArray[0].bootstrap}`;
        code6.textContent = `${cardArray[0].github}`;
        live.setAttribute('href', `${cardArray[0].linkLive}`);
        source.setAttribute('href', `${cardArray[0].linkSource}`);
        card.classList.add('active');
        background.classList.add('active');
      } else if (button.id === '1') {
        name.textContent = `${cardArray[1].name}`;
        feature.textContent = `${cardArray[1].feature}`;
        title.textContent = `${cardArray[1].background}`;
        year.textContent = `${cardArray[1].year}`;
        imageSmall.setAttribute('src', `${cardArray[1].image}`);
        imageLarge.setAttribute('src', `${cardArray[1].large}`);
        description.textContent = `${cardArray[1].description}`;
        information.textContent = `${cardArray[1].message}`;
        code1.textContent = `${cardArray[1].html}`;
        code2.textContent = `${cardArray[1].css}`;
        code3.textContent = `${cardArray[1].javascript}`;
        code4.textContent = `${cardArray[1].ruby}`;
        code5.textContent = `${cardArray[1].bootstrap}`;
        code6.textContent = `${cardArray[1].github}`;
        live.setAttribute('href', `${cardArray[1].linkLive}`);
        source.setAttribute('href', `${cardArray[1].linkSource}`);
        card.classList.add('active');
        background.classList.add('active');
      } else if (button.id === '2') {
        name.textContent = `${cardArray[2].name}`;
        feature.textContent = `${cardArray[2].feature}`;
        title.textContent = `${cardArray[2].background}`;
        year.textContent = `${cardArray[2].year}`;
        imageSmall.setAttribute('src', `${cardArray[2].image}`);
        imageLarge.setAttribute('src', `${cardArray[2].large}`);
        description.textContent = `${cardArray[2].description}`;
        information.textContent = `${cardArray[2].message}`;
        code1.textContent = `${cardArray[2].html}`;
        code2.textContent = `${cardArray[2].css}`;
        code3.textContent = `${cardArray[2].javascript}`;
        code4.textContent = `${cardArray[2].ruby}`;
        code5.textContent = `${cardArray[2].bootstrap}`;
        code6.textContent = `${cardArray[2].github}`;
        live.setAttribute('href', `${cardArray[2].linkLive}`);
        source.setAttribute('href', `${cardArray[2].linkSource}`);
        card.classList.add('active');
        background.classList.add('active');
      } else if (button.id === '3') {
        name.textContent = `${cardArray[3].name}`;
        feature.textContent = `${cardArray[3].feature}`;
        title.textContent = `${cardArray[3].background}`;
        year.textContent = `${cardArray[3].year}`;
        imageSmall.setAttribute('src', `${cardArray[3].image}`);
        imageLarge.setAttribute('src', `${cardArray[3].large}`);
        description.textContent = `${cardArray[3].description}`;
        information.textContent = `${cardArray[3].message}`;
        code1.textContent = `${cardArray[3].html}`;
        code2.textContent = `${cardArray[3].css}`;
        code3.textContent = `${cardArray[3].javascript}`;
        code4.textContent = `${cardArray[3].ruby}`;
        code5.textContent = `${cardArray[3].bootstrap}`;
        code6.textContent = `${cardArray[3].github}`;
        live.setAttribute('href', `${cardArray[3].linkLive}`);
        source.setAttribute('href', `${cardArray[3].linkSource}`);
        card.classList.add('active');
        background.classList.add('active');
      }
    });
  });

  close.addEventListener('click', closeCard);
});
