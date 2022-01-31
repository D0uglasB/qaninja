//Criando API em nodeJS

//Importando o express(express é o pacote node)
const express = require('express')

//Ativando e instanciando o objeto express
const app = express()

//Metodo HTTP -- Metodo GET que será iniciado na pagina principal (/) 
//o resultado será um string "Hello World"
app.get('/', function (req, res) {
    //Está retorando uma mensagem em HTML
    //res.send('Aprendendo: Cypress, JS e nodeJS')

    //Atulizando para retorno um JSon
    res.json({ message: 'Aprendendo: Cypress, JS e nodeJS' })

    app.get('/lista', function (req, res) {
        var avengers = ['Tony', 'Clint', 'Natasha', 'Steve', 'Bruce', 'Talita']
        return res.json({ data: avengers })
    })

    app.get('/cnh', function (req, res) {
        const idade = req.query.idade

        if (!idade) {
            return res.json({ message: 'Idade é um campo obrigatório' })
        }

        var idadeNum = parseInt(idade)

        if (idadeNum >= 18) {
            return res.json({ message: 'Ok, você pode tirar CNH.' })
        } else if (idadeNum > 4) {
            return res.json({ message: 'Você é menor de idade' })
        } else {
            return res.json({ message: 'Melhor você cresce...' })
        }
    })

})

//Porta aonde a aplicação será encontrado ou está localizada
app.listen(3000)