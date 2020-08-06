produtos = ["Abobora","Banana","Batata-Palha","Chá","Maçã","Melancia","Pera","Suco","Vinagre","Vinho"];
precos = ["R$3,35/kg","R$5,00/cacho","R$10,00","R$3,00","R$4,99/kg","4,40/kg","R$6,60/kg","R$5,50","R$5,90","R$23,50"]
$( document ).ready(function() {
    for(i=0;i<10;i++){
      $(`<tr>
          <th scope="row"><img src="../../img/`+produtos[i]+`.png"width="50px" height="50px"></th>
          <td>`+produtos[i]+`</td>
          <td>`+precos[i]+`</td>
        </tr>`).appendTo($("#table"));
    }
});
