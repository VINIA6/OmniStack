const connection  = require('../database/connectbd')
 
module.exports = {
    //LISTAGEM
    async index(req,res) {

        //Método de paginaçao 
        const { page = 1 } = req.query

        const [count] = await connection('incidents').count()

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id','=','incidents.ong_id') //Fazemos um join nas duas tabelas para cruzar os dados
            .limit(5)
            .offset((page - 1)*5)
            /*Se não passarmos os dados desejados que queremos receber vamos sobreescrever o id,
             para que isso não aconteça veja como fazer abaixo*/
            .select(['incidents.*',
                     'ongs.name',
                     'ongs.email',
                     'ongs.wpp',
                     'ongs.city',
                     'ongs.uf'])
        
        //Retorno de contagem no cabeçalho
        res.header('X-Total-Count',count['count(*)'])

        return res.json(incidents)
    },

    //CADASTRO
    async create(req,resp){
        const { title, description, value} = req.body
        const ong_id = req.headers.authorization

        const [id] = await connection('incidents').insert(
            {
                title,
                description,
                value,
                ong_id
            }
        )
        return resp.json({id})
    },

    //DELETE
    async delete(req,res){

        /*Vamos verificar o id passado como parametro pela interface e
         cruzar com o ong_id para verificar se foi mesmo criada*/
        const { id } = req.params
        const ong_id = req.headers.authorization

        const incident = await connection('incidents')
            .where('id',id)
            .select('ong_id')
            .first()

        if (incident.ong_id !== ong_id){
            //Status code http
            return res.status(401).json({erro: 'Operation not permitted'})
        }

        await connection('incidents').where('id',id).delete()

        return res.status(204).send()
    }
}