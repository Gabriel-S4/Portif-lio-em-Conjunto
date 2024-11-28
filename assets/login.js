function tamanhotext(){
    let inputText = document.getElementById('input-text').value;
    console.log(inputText);
    if(inputText.length > 0 && inputText.length < 3){
        document.getElementById('erro-text').innerHTML = `Número mínimo de letras: 3`;
    } else {
        document.getElementById('erro-text').innerHTML = ``;
    }
}

function tamanhoemail(){
    let inputEmail = document.getElementById('input-email').value;
    if(inputEmail.length > 0 && inputEmail.length < 3){
        document.getElementById('erro-email').innerHTML = `Número mínimo de letras: 3`;
    } else {
        document.getElementById('erro-email').innerHTML = ``;
    }
}

function redireciona(){
    let nome = document.getElementById('input-text').value
    let senha = document.getElementById('input-email').value
    if(nome.length>=3 && senha.length>=3){
        alert('Redirecionando...')
        location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    } else {
        alert('O email ou senha tem que ter mais de 3 caracteres')
    }
}