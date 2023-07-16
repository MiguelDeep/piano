//pegar as teclas

const teclas = document.querySelectorAll(".key")


// play nota
function Nota(event){
    //Pegar o codigo da tecla

    let audioTeclaCodigo = pegarCodigoTecla(event);

    const Teclas = document.querySelector(`.key[data-key="${audioTeclaCodigo}"]`)

    // verifica se a tecla clicada existe,se não existe não emite som
    const teclaNaoAchada = Teclas;

    if(!teclaNaoAchada){
        return;
    } 

    //tocar o som
    addClass(Teclas) //criando a class de para tocar o som
    Tocar(audioTeclaCodigo);
}
function addClass(tecla){
    tecla.classList.add('playing')
}
function removendoClasse(event){
    event.target.classList.remove('playing')
}

function Tocar(audioTeclaCodigo){
    const audio = document.querySelector(`audio[data-key="${audioTeclaCodigo}"]`)
    audio.currentTime = 0;
    audio.play();
}
function pegarCodigoTecla(evento){
    let codigoTecla;

    const tipoEvento = evento.type === "keydown";

    if(tipoEvento){
        codigoTecla = evento.keyCode;    
    }else{
        codigoTecla = evento.target.dataset.key;
    }
    return codigoTecla;
}

  //aqui estamos trabalhando com mouse não com o teclado
 teclas.forEach( (tecla) => {
     tecla.addEventListener("click", Nota);
     tecla.addEventListener("transitionend", removendoClasse);
 });

//evento do teclado keydown 
window.addEventListener("keydown", Nota);


