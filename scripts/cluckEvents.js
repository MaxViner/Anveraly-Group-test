const toCardsBtn = document.getElementById('toCards');
const servicesSection = document.querySelector('.services'); // Use class selector '.services' instead of 'services'
const cardBtns = document.querySelectorAll('.cardBtn')
const closeBtn = document.querySelector('.close');
console.log('====================================');
console.log(cardBtns);
console.log('====================================');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
toCardsBtn.addEventListener('click', () => {
    if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
});

cardBtns.forEach(cardBtn => {
    cardBtn.addEventListener('click', () => {
      modal.style.display = 'block';
      overlay.style.display = 'block';
    });
  });
  
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
  });