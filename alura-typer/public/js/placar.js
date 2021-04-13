function InserePlacar(){
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Nathan";
    var numPalavras = $("#contadorPalavras").text();   
    var linha = NovaLinha(usuario, numPalavras); 
    linha.find(".btnRemover").click(RemoveLinha); 
    corpoTabela.prepend(linha); 
 }
 
 function NovaLinha(usuario, palavras){
     var linha = $("<tr>");
     var col_usuario = $("<td>").text(usuario);
     var col_palavras = $("<td>").text(palavras) ; 
     var col_remover =  $("<td>"); 
     var link = $("<a>").addClass("btnRemover").attr("href", "#");
     var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");
     link.append(icone); 
     col_remover.append(link);
     linha.append(col_usuario);
     linha.append(col_palavras);
     linha.append(col_remover);
     return linha; 
 }
 
 function RemoveLinha(){
     event.preventDefault(); 
     $(this).parent().parent().remove(); 
 }
 