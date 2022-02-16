function tocaSom (itemGenerico){
    document.querySelector(itemGenerico).play();
}

const listaTeclas = document.querySelectorAll('.tecla')

for (let i = 0; i < listaTeclas.length; i++) {
    const element = listaTeclas[i];
    const classElement = element.classList[1];
    const audio = `#som_${classElement}`;

    element.onclick = function(){
        tocaSom(audio);
    }

    element.onkeydown = function(evento){

        if(evento.code === 'Space' || evento.code === 'Enter'){
            element.classList.add('ativa')
        }
    }

    element.onkeyup = function(){
        element.classList.remove('ativa')
    }
}

// function tocaSom(){
//     document.querySelector('#som_tecla_pom').play;
// }

// document.querySelector('.tecla_pom').onclick = tocaSom();