/*Primeiramente chamamos o import do knex, logo após vamos
ir até o arquivo knexfile onde vamos puder usar o arquivo se 
referenciando como variavel abrimos a importação knex e 
passamos como paramtero a parte od arquivo/configuration
e chamamos a conexão, agr vamos chamar esse arquivo dentro das rotas.*/


const knex = require('knex')
const configuration = require('../../knexfile')

const connection = knex(configuration.development)

module.exports = connection