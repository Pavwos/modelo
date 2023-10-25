$(window).on("load", function(){
    $(".cssload-container").delay(1069).fadeOut(690);
});

function carregar(){

    var texto = document.querySelectorAll('#topo, #msg, #more, #copy')
    var foto = document.getElementById('img')
    var icone = document.querySelectorAll('.fa-solid')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    
    setInterval(function(){
         data = new Date()
         hora = data.getHours().toString().padStart(2, '0')
         minuto = data.getMinutes().toString().padStart(2, '0')
         

        if(hora >= 0 && hora < 6){
            foto.src = 'tabem.png'
            document.body.style.background = "#000"
            icone[0].style.color = "#ffffff"
            icone[1].style.color = "#ffffff"
            icone[2].style.color = "#ffffff"
            icone[3].style.color = "#ffffff"
            texto[1].innerHTML = `Boa madrugada, agora são ${hora}:${minuto}`
        }
        else if(hora >= 6 && hora <= 12){
            foto.src = 'manha.png'
            for(a in icone){
                if(icone[a].classList){
                    icone[a].classList.add('manha')
                }
            }
            for(i in texto){
            if (texto[i].classList){
                texto[i].classList.add('manha')
            }   
        }
            texto[1].innerHTML = `Bom dia, agora são ${hora}:${minuto}`
        } else if (hora >= 13 && hora < 18){
            foto.src = 'tarde.png'
            texto[0].style.color = "#000"
            for(a in icone){
                if(icone[a].classList)
                icone[a].classList.add('tarde')
            }
            for(i in texto){
                if (texto[i].classList){
                    texto[i].classList.add('tarde')
                }
            }
            texto[1].innerHTML = `Boa tarde, agora são ${hora}:${minuto}`
        } else {
            foto.src = 'noite.png'
            icone[0].style.color = "#0a2472"
            icone[1].style.color = "#0a2472"
            icone[2].style.color = "#0a2472"
            icone[3].style.color = "#0a2472"
            texto[1].innerHTML = `Boa noite, agora são ${hora}:${minuto}`
        }
    }, 1000)
    
    
};