// Obtém referências aos elementos relevantes
const menuIcon = document.getElementById('menuIcon');
const mobileNav = document.querySelector('.mobileNav');
const closeIcon = document.getElementById('closeMenuIcon');


// Adiciona um ouvinte de evento de clique ao ícone do menu
menuIcon.addEventListener('click', () => {
  mobileNav.classList.remove('menuOff');
  mobileNav.classList.add('menuOn')
  
})

closeIcon.addEventListener('click', () => {
    mobileNav.classList.remove('menuOn')
    mobileNav.classList.add('menuOff')
})