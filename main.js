$(window).on("load", function () {
    $('.content').hide();
    $('.loader-content').delay(900).fadeOut(900, function () {
        $('.content').fadeIn(500).show();
    });
});

function carregar() {
    var texto = document.querySelectorAll('#time, #msg, #more, #at');
    var fundo = document.querySelector('#bg-image');
    var data, hora, minuto, segundo;
    var box = document.querySelector('#seconds')
    let showSeconds = false;

    setInterval(function () {
        data = new Date();
        hora = data.getHours().toString().padStart(2, '0');
        minuto = data.getMinutes().toString().padStart(2, '0');
        segundo = data.getSeconds().toString().padStart(2, '0');

        var mensagem, imagem;

        if (hora >= 0 && hora < 6) {
            mensagem = "Boa madrugada :)";
            imagem = "./img/madrugada.jpeg";
        } else if (hora >= 6 && hora <= 12) {
            mensagem = "Bom dia :)";
            imagem = "./img/manha.jpeg";
        } else if (hora >= 13 && hora < 18) {
            mensagem = "Boa tarde :)";
            imagem = "./img/tarde.jpeg";
        } else {
            mensagem = "Boa noite :)";
            imagem = "./img/noite.jpeg";
        }

        if (showSeconds) {
            texto[0].innerHTML = `${hora}:${minuto}:${segundo}`;
        } else {
            texto[0].innerHTML = `${hora}:${minuto}`;
        }

        box.onchange = function () {
            showSeconds = box.checked;
        }

        fundo.style.backgroundImage = `url('${imagem}')`;
        fundo.style.filter = 'brightness(25%)';
        texto[1].innerHTML = mensagem;
    }, 1000);
}


