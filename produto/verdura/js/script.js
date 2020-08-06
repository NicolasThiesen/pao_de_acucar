produtos = ["Abobora","Cenoura","Pimentao Vermelho","Pimentao Verde","Berinjela","Beterraba",];
precos = ["R$3,35/kg","R$5,00/kg","R$5,73/kg","R$ 12,00/kg","R$ 5,50/kg", "R$ 2,89/kg"]
$( document ).ready(function() {
    for(i=0;i<produtos.length;i++){
      $(`<tr>
          <th scope="row"><img src="../../img/`+produtos[i]+`.png"width="50px" height="50px"></th>
          <td>`+produtos[i]+`</td>
          <td>`+precos[i]+`</td>
        </tr>`).appendTo($("#table"));
    }
});
