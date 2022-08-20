function carregar(){

    var texto = document.getElementById('msg')
    var foto = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    
    if(hora >= 0 && hora < 6){
        foto.src = 'tabem.png'
        document.body.style.background = "#000"
        texto.innerHTML = `Agora são ${hora}:${minuto}. Ta bem?`
    }
    else if(hora >= 6 && hora < 12){
        foto.src = 'manha.png'
        document.body.style.background = "#ffe668"
        texto.innerHTML = `Agora são ${hora}:{minuto}. Bom dia`
    } else if (hora >= 12 && hora < 18){
        foto.src = 'tarde.png'
        document.body.style.background = "#b9846f"
        texto.innerHTML = `Agora são ${hora}:${minuto}. Boa tarde`
    } else {
        foto.src = 'noite.png'
        document.body.style.background = "#0f2233"
        texto.innerHTML = `Agora são ${hora}:${minuto}. Boa noite`
    }

};