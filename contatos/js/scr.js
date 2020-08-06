var id = 0;
$(document).ready(function(){
  $("#salvar").click(function(){
    const nome = $("#nome").val();
    const email = $("#email").val();
    const cel = $("#cel").val();
    const mensagem = $("#men").val();
    const assunto = $("#assunto").val();
    const produto = $("#produto").children("option:selected").val();

 
    if (nome !== "" && email !== "" && cel !== "" && assunto !=="" && produto !=="" && mensagem !=="" ) {
      $(`
        <tr id="l-`+id+`">
        <th scope="row">`+id+`</th>
        <td>`+nome+`</td>
        <td>`+email+`</td>
        <td>`+cel+`</td>
        <td>`+assunto+`</td>
        <td>`+produto+`</td>
        <td>`+mensagem+`</td>
        <td><button type="button" class="btn btn-sm btn-primary" onclick="Remover(`+id+`)"><i class="fas fa-minus"></i></button></td>
        </tr>`).appendTo($("#table"));
        id +=1;

        $("#nome").val("");
        $("#email").val("");
        $("#cel").val("");
        $("#men").val("");
        $("#assunto").val("");
    }
    if (nome=="") {
      MsgErro("Por favor preencha o campo nome.","#erro_nome","#nome");
    }else{
      Remove("#erro_nome","#nome");
    }
    if (email=="") {
      MsgErro("Por favor preencha o campo email.","#erro_email");
    }else if(!email.includes("@") || !email.includes(".com")){
      MsgErro("Por favor preencha o campo email adequadamente!","#erro_email","#email");
    }else{
      Remove("#erro_email","#email");
    }
    if (cel=="") {
      MsgErro("Por favor preencha o campo celular.","#erro_cel","#cel");
    }else{
      Remove("#erro_cel","#cel");
    }
    if (assunto=="") {
      MsgErro("Por favor preencha o campo assunto.","#erro_ass","#assunto");
    }else{
      Remove("#erro_ass","#assunto");
    }
    if (produto==="") {
      MsgErro("Por favor selicione um produto.","#erro_prod","#produto");
    }else{
      Remove("#erro_prod","#produto");
    }
    if (mensagem=="") {
      MsgErro("Por favor preencha o campo mensagem.","#erro_mem","#men");
    }else{
      Remove("#erro_mem","#men");
    }
    
  });
})

function Remover(id){
  $("#l-"+id).remove();
}
function Remove(id,idInput){
  $(idInput).css("border","1px solid green");
  $(id).css("display", "none");
}

function MsgErro(msg,id,idInput){
  $(idInput).css("border","1px solid red");
  $(id+" .texto").html(msg);
  $(id).slideDown();
}
