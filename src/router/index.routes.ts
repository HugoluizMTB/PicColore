import express from 'express'
import clients from '../controller/index.controller.js'
import Controllers from '../controller/index.controller.js'

const routes = express.Router()
const eventURL = "event"
const clientURL = "client"
const active_clientURL = "active-client"
const childURL = "child-entry"
const logURL = "log"
const transactionURL = "transaction"
const userURL = "user"
const loginURL = "login"

routes.post(`/${loginURL}`, Controllers.loginUser)

routes.post(`/${userURL}`, Controllers.addUser)
routes.get(`/${userURL}`, Controllers.findAllUsers)

routes.get(`/${active_clientURL}`, Controllers.getAllActiveClients)

routes.post(`/${childURL}`, Controllers.addChild);

routes.post(`/${clientURL}`, clients.addClient);
routes.get(`/${clientURL}`, clients.findAllClients);
routes.get(`/client-search-cpf`, clients.getClientByCPF);

// ROTAS AINDA NÃO UTILIZADAS //

// Rotas Active_Client //

routes.post(`/${active_clientURL}`, (req, res) => {
    res.send({ msg: "Rota post active-client funcionando" });
});
routes.put(`/${active_clientURL}`, (req, res) => {
    res.send({ msg: "Rota put active-client funcionando" });
});
routes.delete(`/${active_clientURL}`, (req, res) => {
    res.send({ msg: "Rota delete active-client funcionando" });
});

// Rotas Child //

routes.get(`/${childURL}`, (req, res) => {
    res.send({ msg: "Rota get child funcionando" });
});
routes.put(`/${childURL}`, (req, res) => {
    res.send({ msg: "Rota put child funcionando" });
});
routes.delete(`/${childURL}`, (req, res) => {
    res.send({ msg: "Rota delete child funcionando" });
});

// Rotas Client //

routes.put(`/${clientURL}`, (req, res) => {
    res.send({ msg: "Rota put client funcionando" });
});
routes.delete(`/${clientURL}`, (req, res) => {
    res.send({ msg: "Rota delete client funcionando" });
});

// Rotas Event //

routes.post(`/${eventURL}`, (req, res) => {
    res.send({ msg: "Rota post event funcionando" });
});
routes.get(`/${eventURL}`, (req, res) => {
    res.send({ msg: "Rota get event funcionando" });
});
routes.put(`/${eventURL}`, (req, res) => {
    res.send({ msg: "Rota put event funcionando" });
});
routes.delete(`/${eventURL}`, (req, res) => {
    res.send({ msg: "Rota delete event funcionando" });
});

// Rotas Log //

routes.post(`/${logURL}`, (req, res) => {
    res.send({ msg: "Rota post Log funcionando" });
});
routes.get(`/${logURL}`, (req, res) => {
    res.send({ msg: "Rota get Log funcionando" });
});
routes.put(`/${logURL}`, (req, res) => {
    res.send({ msg: "Rota put Log funcionando" });
});
routes.delete(`/${logURL}`, (req, res) => {
    res.send({ msg: "Rota delete Log funcionando" });
});

// Rotas Transaction //

routes.post(`/${transactionURL}`, (req, res) => {
    res.send({ msg: "Rota post Transaction funcionando" });
});
routes.get(`/${transactionURL}`, (req, res) => {
    res.send({ msg: "Rota get Transaction funcionando" });
});
routes.put(`/${transactionURL}`, (req, res) => {
    res.send({ msg: "Rota put Transaction funcionando" });
});
routes.delete(`/${transactionURL}`, (req, res) => {
    res.send({ msg: "Rota delete Transaction funcionando" });
});

export default routes
