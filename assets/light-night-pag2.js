function trocarCor() {
    let header = document.querySelector('.header');
    let text = document.querySelectorAll('.link'); //todos os que tiverem a classe link
    let footer = document.querySelector('.footer');
    let loginColor = document.querySelector('.cards');
    let descricao = document.querySelectorAll('.descricao')

    if(header.style.backgroundColor == `white`){
      header.style.backgroundColor = 'rgb(63, 63, 63)';

      footer.style.backgroundColor = 'rgb(59, 59, 59)';
      footer.style.color = 'white';

      loginColor.style.backgroundColor = `rgba(63, 63, 63, 0.9)`;

      text.forEach((text) => {
        text.style.color = 'white';
      });

      descricao.forEach((loginTexts) => {
        loginTexts.style.color ='white';
      });

    } else{
      header.style.backgroundColor = `white`;

      footer.style.backgroundColor = 'white';
      footer.style.color = 'rgb(59, 59, 59)';

      loginColor.style.backgroundColor = `rgba(255,255,255,0.9)`;

      text.forEach((text) => {
        text.style.color = 'black';
      });

      descricao.forEach((loginTexts) => {
        loginTexts.style.color ='rgba(63, 63, 63)';
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

  fontSizeRange.addEventListener('input', function() {
    const newSize = fontSizeRange.value + 'px'; 
  document.body.style.fontSize = newSize;  
});