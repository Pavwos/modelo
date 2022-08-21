function carregar(){

    var texto = document.getElementById('msg')
    var foto = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    
    
    setInterval(function(){
         data = new Date()
         hora = data.getHours().toString().padStart(2, '0')
         minuto = data.getMinutes().toString().padStart(2, '0')
         segundo = data.getSeconds().toString().padStart(2, '0')
         

         if(hora >= 0 && hora < 6){
            foto.src = 'tabem.png'
            document.body.style.background = "#000"
            texto.innerHTML = `Agora são ${hora}:${minuto}:${segundo}. Ta bem?`
        }
        else if(hora >= 6 && hora <= 12){
            foto.src = 'manha.png'
            document.body.style.background = "#ffe668"
            texto.innerHTML = `Agora são ${hora}:{minuto}:${segundo}. Bom dia`
        } else if (hora >= 13 && hora < 18){
            foto.src = 'tarde.png'
            document.body.style.background = "#b9846f"
            texto.innerHTML = `Agora são ${hora.padstart(2, '0')}:${minuto.padstart(2, '0')}:${segundo.padstart(2, '0')}. Boa tarde`
        } else {
            foto.src = 'noite.png'
            document.body.style.background = "#0f2233"
            texto.innerHTML = `Agora são ${hora}:${minuto}:${segundo}. Boa noite`
        }
    
    }, 1000)
    
    
};