$(window).on("load", function(){
    $(".cssload-container").delay(1069).fadeOut(690);
});

function carregar() {
    var texto = document.querySelectorAll('#msg, #bom');
    var foto = document.getElementById('img');
    var icone = document.querySelectorAll('.fa-solid');
    var data, hora, minuto;

    setInterval(function () {
        data = new Date();
        hora = data.getHours().toString().padStart(2, '0');
        minuto = data.getMinutes().toString().padStart(2, '0');

        if (hora >= 0 && hora < 6) {
            document.body.style.background = '#000'
            icone.forEach(function (element) {
                element.style.color = "#fff";
            });
            texto[1].innerHTML = `${hora}:${minuto}`;
            texto[0].innerHTML = `Boa madruga`;
        } else if (hora >= 6 && hora <= 12) {
                document.body.style.background = '#fdc673'
                icone.forEach(function (element) {
                    element.style.color = "#fff";
                });
            texto[1].innerHTML = `${hora}:${minuto}`;
            texto[0].innerHTML = `Bom dia`;
        } else if (hora >= 13 && hora < 18) {
            document.body.style.background = '#de7d6a'
            icone.forEach(function (element) {
                element.style.color = "#fff";
            });
            texto[1].innerHTML = `${hora}:${minuto}`;
            texto[0].innerHTML = `Boa tarde`;
        } else {
            document.body.style.background = '#020f20'
            icone.forEach(function (element) {
                element.style.color = "#fff";
            });
            texto[1].innerHTML = `${hora}:${minuto}`;
            texto[0].innerHTML = `Boa noite`;
        }
    }, 1000);
}
