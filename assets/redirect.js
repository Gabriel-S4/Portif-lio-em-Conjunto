const butaummassa = document.querySelectorAll('.btn');

butaummassa.forEach(butaum => {
    butaum.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = butaum.getAttribute('target');
        window.location.href = `pag2.html#${targetId}`;
    }); 
});