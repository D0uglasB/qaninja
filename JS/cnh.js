//Função em JS é um bloco de codigos armazenado que executa uma determinada operação
//uma tarefa ou até mesmo um calculo podem também retornar resultado de operações no mesmo bloco

//Definir função
        //Essa função está criando um selector CSS
        function verificarIdade() {
            var nome = document.querySelector('input[name=nome]')
            var idade = document.querySelector('input[idade=idade]')

            //Converte Sting para INT
            var idadeNum = parseInt(idade.value)

            console.log(nome.value)
            console.log(idade.value)
            
            
            //msg = '';

            if (idadeNum >= 18) {
                return ('Ok, você pode tirar CNH.')
            } else if (idadeNum > 4) {
                return ('Você é menor de idade')
            } else {
                return ('Melhor você cresce...')
            }

            //console.log(msg);
            //alert(msg)
        }  

        function message(msg) {
                alert(msg)
                console.log(msg)
            }


    //Variaveis no JS tem uma tipagem dinamica
    //var nome = "DBatista"
    //var idade = 38;
    //var ativo = true;

    //utilizando a função JS prompt essa função abri um popup no navegado
    //o prompt transforma os valores em string
    //var nome = prompt("Qual o seu nome?");
    //var recebeIdade = prompt("Qual a sua idade?");

    //conversão de valores no JS
    //var idade = parseInt(recebeIdade);


    //Instrução JS para imprimir 
    //typeof recurso do JS para obter o tipo da minhas variaveis
   
    //console.log(nome);
    //console.log(typeof nome);

    //console.log(idade);
    //console.log(typeof idade);

    //console.log(ativo);
    //console.log(typeof ativo);

    //documento obj do JS que busta elementos HTML
    //essa metodo está buscando no JS um elemento com o ID nome
    //document.getElementById("nome").innerText = nome;
