// Seleciona todos os cards
const cards = document.querySelectorAll('.card');

// Adiciona eventos de mouseover e mouseout para cada card
cards.forEach(card => {
  const description = card.querySelector('.description');
  const descriptionAlt = card.querySelector('.description-alt');
  const avatarCard = card.querySelector('.avatar-card-normal'); // Seleciona apenas o avatar relacionado ao card
  const leftOrTopContainer = card.querySelector('.leftOrTop-container-normal'); // Relacionado ao card
  const RightOrBottomContainer = card.querySelector('.RightOrBottom-container-normal'); // Relacionado ao card
  const btnSaibaMais = card.querySelector('.container-btn');

  card.addEventListener('mouseover', () => {
    // Expande o card
    card.classList.remove('card');
    card.classList.add('expanded');
    description.style.display = 'none'; // Esconde a descrição pequena
    descriptionAlt.style.display = 'flex'; // Mostra a descrição grande
    card.style.width = `600px`; // Card expande
    btnSaibaMais.style.display = `flex`;

    // Altera a classe do avatar relacionado
    if (avatarCard) {
      avatarCard.classList.remove('avatar-card-normal');
      avatarCard.classList.add('avatar-card-expanded'); // Adiciona a classe de expansão
    }

    // Altera os containers relacionados
    if (leftOrTopContainer) {
      leftOrTopContainer.classList.remove('leftOrTop-container-normal');
      leftOrTopContainer.classList.add('leftOrTop-container-expanded');
    }

    const lastCard = document.getElementById('last-card');
    if(lastCard.clientWidth > `310`){
    carousel.scrollLeft += 800
    }
    
  });

  card.addEventListener('mouseout', () => {
    // Restaura o card ao estado normal
    card.classList.remove('expanded');
    card.classList.add('card');
    description.style.display = 'block'; // Mostra a descrição pequena
    descriptionAlt.style.display = 'none'; // Esconde a descrição grande
    card.style.width = `300px`; // Card volta ao tamanho normal
    btnSaibaMais.style.display = `none`;

    // Restaura a classe do avatar
    if (avatarCard) {
      avatarCard.classList.remove('avatar-card-expanded');
      avatarCard.classList.add('avatar-card-normal'); // Restaura a classe original
    }

    // Restaura os containers
    if (leftOrTopContainer) {
      leftOrTopContainer.classList.add('leftOrTop-container-normal');
      leftOrTopContainer.classList.remove('leftOrTop-container-expanded');
    }

  });
});

// Adiciona interatividade ao botão de scroll pre e next, incrementando e decrementando a posição do scroll
const cardwidth = 280;

const carousel = document.getElementById('carousel')
let scrollSize = carousel.scrollLeft;

function buttonNext() {
    carousel.scrollLeft += 300
}

function buttonPre() {
    carousel.scrollLeft -= 300
}

// Verifica se o card é o último e rola a barra de scroll horizontal
document.addEventListener('mouseenter', (event) => {
  if (event.target.id === 'last-card') {
    carousel.scrollLeft += 500
  }
});