/*
| work section scripts
*/


var cardsContainer = document.getElementById('work-cards');
var cards = document.querySelectorAll('#work-cards .card');

[].forEach.call(cards, card => {
  
  card.addEventListener('mouseenter', function () {
    this.querySelector('.card-background').classList.add('active');
  });
  
  card.addEventListener('mouseleave', function () {
    this.querySelector('.card-background').classList.remove('active');
  });
  
  
});
