
$(document).ready(function (){
        $("#btnCadastrar").on("click", function(){ 

                let nomeV = $("#nome").val();
                let tipoV = $("#tipo").val();
                let cpfV = $("#cpfcnpj").val();
                let enderecoV = $("#endereco").val();
                let telefoneV= $("#telefone").val();
                let cepV = $("#cep").val();
                let cidadeV = $("#cidade").val();
                let textoValidacao = "";
                
                
                if(nomeV == ""){
                        textoValidacao += "O campo Nome é de preenchimento obrigatório\n";
                }
                if(tipo == ""){
                        textoValidacao += "O campo Tipo é de preenchimento obrigatório\n";
                }
                if(cpfV == ""){
                        textoValidacao += "O campo CPF ou CNPJ é de preenchimento obrigatório\n";
                }
                if(enderecoV == ""){
                        textoValidacao += "O campo Endereço é de preenchimento obrigatório\n";
                }
                if(telefoneV == ""){
                        textoValidacao += "O campo Número é de preenchimento obrigatório\n";
                }
                if(cepV == ""){
                        textoValidacao += "O campo CEP é de preenchimento obrigatório\n";
                }
                if(cidadeV == ""){
                        textoValidacao += "O campo Cidade é de preenchimento obrigatório\n";
                }
                if(textoValidacao != ""){
                        alert(textoValidacao);
                }
        })    
        
        $("#btnLimpar").on("click",function(){

                $("input").val("");
                $("#nome").css("background-color", "");
                $("#tipo").css("background-color", "");
                $("input").css("background-color", "");
                $("select").css("background-color", "");

        })

        $("#btnRandom").on("click", function(){

                var colorR = Math.floor((Math.random() * 256));
                var colorG = Math.floor((Math.random() * 256));
                var colorB = Math.floor((Math.random() * 256));
                $("input").css("background-color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
                $("select").css("background-color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
        })

        $("#select").on("click", function(){

                let selecionar = document.getElementById("select").value;
                //fazer  o campo input ser zerado toda vez que trocar de Tipo
                document.getElementById("cpfcnpj").value = "";

                if(selecionar == ""){
                        $("#informacao").html("CPF/CNPJ");

                }
                if(selecionar == "fisico"){
                        $("#informacao").html("CPF");

                }
                if (selecionar == "juridico"){
                        $("#informacao").html("CNPJ");
                }       
        }) 


        $("#cpfcnpj").on("blur", function(){
                
                let selecionar = $("#select").val();

                if (selecionar == "fisico") {
                        let valorCPF = $("#cpfcnpj").val();
                        let array1 = valorCPF.split("");
                        if (valorCPF.length == 11) {
                        array1.splice(3, 0, ".");
                        array1.splice(7, 0, ".");
                        array1.splice(11, 0, "-");
                        }
                        $("#cpfcnpj").val(array1.join(""));
                }
                if (selecionar == "juridico") {
                        // Adicionar os elementos para o CNPJ certinho
                        let valorCNPJ = $("#cpfcnpj").val();
                        let array2 = valorCNPJ.split("");
                        if (valorCNPJ.length == 14) {
                        array2.splice(2, 0, ".");
                        array2.splice(6, 0, ".");
                        array2.splice(10, 0, "/");
                        array2.splice(15, 0, "-");
                        }
                        $("#cpfcnpj").val(array2.join(""));
                }
        })
              
        $("#telefone").on("blur", function(){

                let phone = $("#telefone").val();
                let array = phone.split("");
                // Opção mais simples: array2 = ["(", array[0], array[1], ")", array[2], array[3], array[4], array[5], array[6], "-", array[7], array[8], array[9], array[10]];
        
                if (phone.length === 11) {
                array.splice(0, 0, "(");
                array.splice(3, 0, ")");
                array.splice(9, 0, "-");
                } else if (phone.length === 10) {
                array.splice(0, 0, "(");
                array.splice(3, 0, ")");
                array.splice(8, 0, "-");
                }
        
                $("#telefone").val(array.join(""));

        })   
})