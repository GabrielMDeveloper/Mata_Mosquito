//Declaração de Variáveis
var altura  = 0
var largura = 0
var tempo = 50
var vida = 3
var tempoCriaMosca = 1000
//Fim Declaração Variáveis

//Inicio dos códigos de nível de jogo:
var nivel = window.location.search
nivel = nivel.replace('?', '')
if(nivel == 'muito_facil'){
    tempoCriaMosca = 2000
}else if(nivel == 'facil'){
    tempoCriaMosca = 1500
}else if(nivel == 'medio'){
    tempoCriaMosca = 1000
}else if(nivel == 'chucknorris'){
    tempoCriaMosca = 750
}

function iniciarJogo(){
    var nivel =  document.getElementById('nivel').value
    if(nivel == ""){
        alert('Selecione um nível para iniciar o jogo!')
        return false
    }
    //Carrega Página do Jogo  - jogo.html, passando o nível como parâmetro
    window.location.href = "jogo.html?" + nivel
}


function ajustaTamanhoTelaJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura)
}

ajustaTamanhoTelaJogo()

//Cronometro:
var cronometro = setInterval(function(){
    tempo -= 1
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosco)
        window.location.href = "gameOver.html"
    }else{
    document.getElementById('tempo').innerHTML = tempo 
}
},1000)
 
function posicaoRandomica(){
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
if(vida <= 0){
        window.location.href = 'gameOver.html'
    }else{
        document.getElementById('v' + vida).src = 
        'imagens/coracao_vazio.png'
        vida -= 1
    }    
    }
    
    
    var posicaoX = Math.floor(Math.random() * largura) -90
    var posicaoY = Math.floor(Math.random() * altura)  -90 

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    var mosquito = document.createElement('img')
    mosquito.id = 'mosquito'
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoMosquito() + ' ' + lado()
    mosquito.style.left = posicaoX +'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.onclick = function(){
        this.remove()
    }
    document.body.appendChild(mosquito)
}

function tamanhoMosquito(){
    var aleatorio = Math .floor(Math.random() * 3)
    switch(aleatorio){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'            
    }
}

function lado(){
    var lado = Math.floor(Math.random() * 2)
    console.log(lado)
    lado = lado == 0 ? 'lado1' : 'lado2'
    return lado
}