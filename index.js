
const popUpCard = document.querySelectorAll('[data-modal-target]');
const closeCard = document.querySelectorAll('[data-close]'); 

popUpCard.forEach(button => {
    button.addEventListener('click', () => {
      const card = document.querySelector(button.dataset.modalTarget)
      popUp(card)
    })
  })

  function popUp(card) {
    if (card == null) return
    card.classList.add('active')
 }



 function remove(card){
    if(card == null)return
    card.classList.remove('active')
 }