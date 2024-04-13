$(window).on("load", function(){
    $(".cssload-container").delay(1069).fadeOut(690);
});

function carregar() {
    var texto = document.querySelectorAll('#msg, #bom');
    var foto = document.getElementById('img');
    var icone = document.querySelectorAll('#icone');
    var data, hora, minuto;

    setInterval(function () {
        data = new Date();
        hora = data.getHours().toString().padStart(2, '0');
        minuto = data.getMinutes().toString().padStart(2, '0');

        if (hora >= 0 && hora < 6) {
            document.body.style.backgroundImage = 'url(img/madrugada.jpeg)'
            icone.forEach(function (element) {
                element.style.color = "##ffa600";
            });
            texto[1].innerHTML = `${hora}:${minuto}`;
            texto[0].innerHTML = `Boa madruga`;
        } else if (hora >= 6 && hora <= 12) {
            document.body.style.backgroundImage = 'url(img/madrugada.jpeg)'
                icone.forEach(function (element) {
                    element.style.color = "#fff";
                });
            texto[1].innerHTML = `${hora}:${minuto}`;
            texto[0].innerHTML = `Bom dia`;
        } else if (hora >= 13 && hora < 18) {
            document.body.style.backgroundImage = 'url(img/madrugada.jpeg)'
            icone.forEach(function (element) {
                element.style.color = "#fff";
            });
            texto[1].innerHTML = `${hora}:${minuto}`;
            texto[0].innerHTML = `Boa tarde`;
        } else {
            document.body.style.backgroundImage = 'url(img/madrugada.jpeg)'
            icone.forEach(function (element) {
                element.style.color = "#fff";
            });
            texto[1].innerHTML = `${hora}:${minuto}`;
            texto[0].innerHTML = `Boa noite`;
        }
    }, 1000);
}
