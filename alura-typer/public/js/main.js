//busco o texto do parágrafo
var frase = $(".frase").text();

//quebro o texto em pedaços (separados no espaço)
var tamanhoFrase = frase.split(" ").length;

//apresento o tamanho do array pós split
$("#tamanhoFrase").text(tamanhoFrase);

var campo = $(".campoDigitacao"); 
campo.on("input", function(){
    var conteudo = campo.val(); 
    var qtdCaracteres = conteudo.length; 
    var qtdPalavras = conteudo.split(/\S+/).length - 1;
    $("#contadorCaracteres").text(qtdCaracteres); 
    $("#contadorPalavras").text(qtdPalavras); 
});

var spanTempo = $("#tempoDigitacao");
var tempoRestante = spanTempo.text(); 
campo.one("focus", function(){
    var cronometroID = setInterval(function(){
        tempoRestante--; 
        spanTempo.text(tempoRestante); 
        if(tempoRestante == 0)
        {
             campo.attr("disabled", true);     
             clearInterval(cronometroID);      
        }
    },1000)
});