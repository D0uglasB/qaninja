//Função em JS é um bloco de codigos armazenado que executa uma determinada operação
//uma tarefa ou até mesmo um calculo podem também retornar resultado de operações no mesmo bloco

var avengers = ['Tony', 'Clint', 'Natasha', 'Steve', 'Bruce']

function listaVingadores() {
    //Buscando o agrupador de Lista HTML
    var ul = document.getElementById('avengers')

    //Encerramento do loop
    ul.innerHTML = ''

    //Criando uma lista dinamica
    avengers.forEach(function (a) {
        //Estou criando um elemento de forma dinamica dentro do JS
        var li = document.createElement('li')
        //Estou obtendo o texto dos vingadores
        var text = document.createTextNode(a)
        //Estou pegando o texto e colocando dentro do elemto
        li.appendChild(text)
        //Estou pegando a lista e colocando no agrupador de lista
        ul.appendChild(li)

    })
}