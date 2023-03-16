import express from 'express'
import clients from '../controller/index.controller.js'

const routes = express.Router()
const eventConfigURL = "eventConfig";
const clientURL = "client";


routes.post(`/${eventConfigURL}`, (req, res) => {
    res.send({ msg: "Rota post event config funcionando" });
});

routes.get(`/${eventConfigURL}`, (req, res) => {
    res.send({ msg: "Rota get event config funcionando" });
});

routes.put(`/${eventConfigURL}`, (req, res) => {
    res.send({ msg: "Rota put event config funcionando" });
});

routes.delete(`/${eventConfigURL}`, (req, res) => {
    res.send({ msg: "Rota delete event config funcionando" });
});


routes.post(`/${clientURL}`, clients.addClient);
routes.get(`/${clientURL}`, clients.findAll);

export default routes
