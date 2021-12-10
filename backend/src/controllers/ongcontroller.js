const connection  = require('../database/connectbd')
const crypto = require('crypto')

//CADASTRO
module.exports={

    //LISTAGEM
    async index(req,res) {
        const ongs = await connection('ongs').select('*')
    
        return res.json(ongs)
    },

    //CADASTRO 
    async create(req, res) {
        //Recebendo dados da apicação.
        //A forma abaixo eu consigo fazer diversas variaveis receberem dados da requisição
        const { name, email, wpp, city, uf } = req.body

        /*Vamos conectar ao banco e escrever nele 
        a função await funciona de forma que ela aguarda a função connection
        ser realizada pra poder dar continuidade pro retorno*/
        const id = crypto.randomBytes(4).toString('HEX')

        await connection('ongs').insert({
            id,
            name,
            email,
            wpp,
            city,
            uf
        })
        
        return res.json({id})
    }
}