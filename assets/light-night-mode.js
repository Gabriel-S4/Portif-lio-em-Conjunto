function trocarCor() {
  let header = document.querySelector('.header');
  let text = document.querySelectorAll('.link');
  let footer = document.querySelector('.footer');
  let cards = document.querySelectorAll('.card'); 
  let expandedCards = document.querySelectorAll('.RightOrBottom-container-normal');
  let expandedTextElements = document.querySelectorAll('.expanded');

  if (header.style.backgroundColor === 'white') {

      header.style.backgroundColor = 'rgb(63, 63, 63)';

      footer.style.backgroundColor = 'rgb(59, 59, 59)';
      footer.style.color = 'white';

      text.forEach((link) => {
          link.style.color = 'white';
      });

      cards.forEach((card) => {
          card.style.backgroundColor = 'rgb(63, 63, 63)';
          card.style.color = 'rgb(230, 230, 230)';
      });

      expandedCards.forEach((expandedCards) => {
          expandedCards.style.backgroundColor = 'rgb(63, 63, 63)';
      });

      expandedTextElements.forEach((expandedText) => {
          expandedText.style.color = 'rgb(230, 230, 230)';
      });
  } else {
      header.style.backgroundColor = 'white';

      footer.style.backgroundColor = 'white';
      footer.style.color = 'rgb(59, 59, 59)';

      text.forEach((link) => {
          link.style.color = 'black';
      });

      cards.forEach((card) => {
          card.style.backgroundColor = 'rgb(230, 230, 230)';
          card.style.color = 'rgb(63, 63, 63)';
      });

      expandedCards.forEach((expandedCards) => {
          expandedCards.style.backgroundColor = 'rgb(230, 230, 230)';
      });

      expandedTextElements.forEach((expandedText) => {
          expandedText.style.color = 'rgb(63, 63, 63)';
      });
  }

  const btnColorSite = document.querySelector('.btn-color-site, .btnColorSiteBlack');

  if (btnColorSite) {
      if (btnColorSite.classList.contains('btn-color-site')) {
          btnColorSite.classList.remove('btn-color-site');
          btnColorSite.classList.add('btnColorSiteBlack');
      } else {
          btnColorSite.classList.remove('btnColorSiteBlack');
          btnColorSite.classList.add('btn-color-site');
      }
  }
}
