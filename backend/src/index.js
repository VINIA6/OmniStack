//importando o modulo express para dentro da variavel express.
const { request, response } = require('express')
const express = require('express')
const routes = require('./routes')
const cors = require('cors')

//Criando nossa aplicação.
const app = express()

app.use(express.json())
app.use(routes)
app.use(cors())

app.listen(3333)

//Eu crio uma rota local com o metodo get criando uma função dentro do metodo get
//retornando um envio de string
//  *Aprendendo mais sobre rotas: A rota geralmente é toda a rota de destino junto ao
//recurso que no caso da nossa aplicação seria user, logo teriamo, localhost:3333/user
//  *Aprendendo um pouco sobre métodos http: No exemplo abaixo usamos o método get, existem 
//alguns outros métodos, o método
//  GET: Buscar uma informação do back-end
//  POST: Criar uma informação no back-end
//  PATH: Alterar uma informação no back-end
//  DELETE: Para deletar uma informção do back-end
//É importante respeitar a semantica para entender bem as rotas da tua aplicação.

// *Tipos de Parametros: 
// Query: Parametros nomeados e enviados pela rota após o simbolo de ?, é muito 
//  ultilizado para fiultros paginação e etc 
// Rounte: São parametros ulitlizados para identificar recusros 
// Request Body: 

//Configurando banco de dados: 
//Podemos instalar diretamente o 
//   Driver: SELECT * FROM users
//   Query Builder: table('users').select('*').where()
//Deixamos escutando na porta 3333, serve para acessar a aplicação.
//Aq a aplicação já existe, mas vai retornar que n existe nenhuma rota exitente nessa aplicação. 

//Vamos instalat o nodemon para reinicar sempre que salvar nosso código 




