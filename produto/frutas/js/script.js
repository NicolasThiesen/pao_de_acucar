produtos = ["Abacate","Banana","Laranja","Maçã","Melancia","Pera"];
precos = ["R$5,35","R$5,00/cacho","R$4,00/kg","R$4,99/kg","4,40/kg","R$6,60/kg"]
$( document ).ready(function() {
    for(i=0;i<produtos.length;i++){
      $(`<tr>
          <th scope="row"><img src="../../img/`+produtos[i]+`.png"width="50px" height="50px"></th>
          <td>`+produtos[i]+`</td>
          <td>`+precos[i]+`</td>
        </tr>`).appendTo($("#table"));
    }
});
