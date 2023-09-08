/*
    Nome: Diogo Gomes Castro
    Turma: 3° Perído - ADS
*/

$( function() {
    $("#datepicker").datepicker();
});

$(function() {
    $("#dialog_nome").dialog({
        autoOpen: false
    });
});

$(function() {
    $("#dialog_data").dialog({
        autoOpen: false
    });
});

var objetos = []; 

$("button").click(function(){
    var nome = $("#nome").val();
    var data_nasc = $("#datepicker").val();

    var data = [];

    data = data_nasc.split("/");
    var maiorIdade = false;
    dataAtual = new Date();
    month = dataAtual.getMonth() + 1;
    day = dataAtual.getDate();
    year = dataAtual.getFullYear() - data[2];

    if(year >= 18){
        if(year == 18)
        {
            if(month >= data[1])
            {
                if(day >= data[0])
                {
                    maiorIdade = true;
                }
            }
        }
        else{
            maiorIdade = true;
        }
    }

    //VALIDAÇÃO
    if(nome.length < 3 || nome.length > 50){
        $("#dialog_nome").dialog("open");
    }
    if(maiorIdade == false){
        $("#dialog_data").dialog("open");
    }
    else{
        var newObj = {
            "Nome": nome,
            "Data de Nascimento": data_nasc
        };

        objetos.push(newObj);
        $("textarea").val(JSON.stringify(objetos, null, 2));

        //CRIANDO UMA NOVA LINHA E INSERINDO NA TABELA
        $("<tr>")
        .append("<td>" + nome + "</td>")
        .append("<td>" + data_nasc + "</td>")
        .appendTo("table tbody");
    }
});