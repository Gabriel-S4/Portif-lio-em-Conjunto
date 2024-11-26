function trocarCor() {
    let header = document.querySelector('.header');
    let text = document.querySelectorAll('.link'); //todos os que tiverem a classe link
    let footer = document.querySelector('.footer');
    let loginColor = document.querySelector('.title-pag');
    let loginText = document.querySelector('.title-pag h1')

    if(header.style.backgroundColor == `white`){
      header.style.backgroundColor = 'rgb(63, 63, 63)';

      footer.style.backgroundColor = 'rgb(59, 59, 59)';
      footer.style.color = 'white';

      loginColor.style.backgroundColor = `rgba(0,0,0,0.6)`;
      loginText.style.color = `white`;

      text.forEach((text) => {
        text.style.color = 'white';
      });
    } else{
      header.style.backgroundColor = `white`;

      footer.style.backgroundColor = 'white';
      footer.style.color = 'rgb(59, 59, 59)';

      loginColor.style.backgroundColor = `rgba(255,255,255,0.5)`;
      loginText.style.color = `black`;

      text.forEach((text) => {
        text.style.color = 'black';
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