function enviar() {
    var cont = parseInt(document.getElementById("entrada").value);
    document.getElementById("legenda").style.display = "block"
    
    for (let i = 0; i <= cont; i++) {

        if (i !== cont) {
            var paragrafo = document.createElement("p");
            paragrafo.textContent = "PARABÉNS DANI🎉🥳";
            document.body.appendChild(paragrafo);
            }

        if (i === cont) {
        var paragrafo = document.createElement("p");
        paragrafo.textContent = "PARABÉNS VOVÔ🎉🥳";
        document.body.appendChild(paragrafo);
        }
    }
}