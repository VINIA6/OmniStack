const express = require('express')

const ong_controller =  require('./controllers/ongcontroller')
const incident_controller = require('./controllers/incidentcontroller')
const profile_controller = require('./controllers/profilecontroller')
const login_controller = require('./controllers/sectioncontroller')


const routes = express.Router()

routes.post('/login',login_controller.create)

routes.get('/ongs',ong_controller.index)
routes.post('/ongs',ong_controller.create)

routes.get('/profile',profile_controller.index )

routes.get('/incidents',incident_controller.index)
routes.post('/incidents',incident_controller.create)
routes.delete('/incidents/:id',incident_controller.delete)




module.exports = routes
