var tempoInicial = $("#tempoDigitacao").text(); 
var campo = $(".campoDigitacao"); 

$(document).ready(function(){
    InicializaTamanhoFrase(); 
    InicializaContadores(); 
    InicializaCronometro();
    InicializaMarcadores(); 
    $("#botaoReiniciar").click(ReiniciaJogo);
});


function InicializaTamanhoFrase()
{
    var frase = $(".frase").text();
    var tamanhoFrase = frase.split(" ").length;
    $("#tamanhoFrase").text(tamanhoFrase);
}

function InicializaContadores()
{    
    campo.on("input", function(){
        var conteudo = campo.val(); 
        var qtdCaracteres = conteudo.length; 
        var qtdPalavras = conteudo.split(/\S+/).length - 1;
        $("#contadorCaracteres").text(qtdCaracteres); 
        $("#contadorPalavras").text(qtdPalavras); 
    });
}


function InicializaCronometro(){   
    $("#botaoReiniciar").attr("disabled", true);    
    var tempoRestante = $("#tempoDigitacao").text(); 
    campo.one("focus", function(){
        var cronometroID = setInterval(function(){
            tempoRestante--; 
            $("#tempoDigitacao").text(tempoRestante); 
            if(tempoRestante == 0)
            {
                clearInterval(cronometroID);
                FinalizaJogo();                       
            }
        },1000)
    });
}

function FinalizaJogo(){
    campo.attr("disabled", true);  
    campo.toggleClass("campo-desativado");                   
    $("#botaoReiniciar").attr("disabled", false);        
    InserePlacar();    
}


function ReiniciaJogo(){    
     campo.attr("disabled", false);
     campo.val(" "); 
     $("#contadorCaracteres").text("0");
     $("#contadorPalavras").text("0");  
     $("#tempoDigitacao").text(tempoInicial);       
     campo.toggleClass("campo-desativado");
     campo.removeClass("borda-vermelha"); 
     campo.removeClass("borda-verde");
     InicializaCronometro();     
}


function InicializaMarcadores(){
    var frase = $('p.frase').text();  
    campo.on("input", function(){
        var digitado  = campo.val().trim(); 
        var comparavel = frase.trim().substr(0, digitado.length);   
        if(digitado == comparavel){            
            campo.addClass("borda-verde");
            campo.removeClass("borda-vermelha");             
        }else{          
            campo.addClass("borda-vermelha"); 
            campo.removeClass("borda-verde");            
        }        
    });
}







