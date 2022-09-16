$(window).on("load", function(){
    $(".cssload-container").delay(1000).fadeOut(500);
});

function carregar(){

    var texto = document.getElementById('msg')
    var foto = document.getElementById('img')
    var icone = document.getElementById('icon')
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
            texto.innerHTML = `Boa madrugada, agora são ${hora}:${minuto}:${segundo}`
        }
        else if(hora >= 6 && hora <= 12){
            foto.src = 'manha.png'
            document.body.style.background = "#ffe668"
            texto.innerHTML = `Bom dia, agora são ${hora}:${minuto}:${segundo}`
        } else if (hora >= 13 && hora < 18){
            foto.src = 'tarde.png'
            document.body.style.background = "#b9846f"
            texto.innerHTML = `Boa tarde, agora são ${hora}:${minuto}:${segundo}`
            document.icon.style.color = "#232323"
        } else {
            foto.src = 'noite.png'
            document.body.style.background = "#0f2233"
            texto.innerHTML = `Boa noite, agora são ${hora}:${minuto}:${segundo}`
        }
    
    }, 1000)
    
    
};