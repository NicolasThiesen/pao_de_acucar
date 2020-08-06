produtos = ["Vinho Tinto Seco Gato Negro","Vinho De Sobremesa","Vinho Tinto Pegola","Country Wine","Aurora Merlot","Vinho Rose"];
precos = ["R$45,99","R$58,00","R$24,90","R$11,90","R$26,95/kg","R$67,20"]
$( document ).ready(function() {
    for(i=0;i<produtos.length;i++){
      $(`<tr>
          <th scope="row"><img src="../../img/`+produtos[i]+`.jpg"width="50px" height="50px"></th>
          <td>`+produtos[i]+`</td>
          <td>`+precos[i]+`</td>
        </tr>`).appendTo($("#table"));
    }
});
