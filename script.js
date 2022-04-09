let enter = document.querySelector('#enter').addEventListener('click', function calcular() {
    event.preventDefault();
    let primeiroValor = document.querySelector('#primeiroValor').value;
    let segundoValor = document.querySelector('#segundoValor').value;
    
    
    if(primeiroValor- segundoValor > 18){
        window.location.replace("https://youtu.be/nAHCRT74scc");
    }else{
        console.log("acesso negado");
    }
});

