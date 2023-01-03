const express = require('express');
const {db} = require("../utils/db");
const {Client} = require("../records/client");
const {NotFoundError} = require("../utils/errors");
const clientRouter = express.Router();

module.exports = {
    clientRouter,
}
clientRouter
    .get('/', (req, res) => {
        res.render('client/list-all', {
            clients: db.getAll(),
        })
    })
    .get('/:id', (req, res) => {
        const {id} = req.params;
        const client = db.getOne(`${id}`);
        if (!client) {
            throw new NotFoundError()
        }
        res.render('client/one', {
            client,
        })
    })
    .post('/', (req, res) => {
        const id = db.create(req.body)

        res
            .status(201)
            .redirect(`/clients/${id}`);
    })
    .put('/:id', (req, res) => {
        const {id} = req.params;
        const client = db.getOne(`${id}`);
        if (!client) {
            throw new NotFoundError()
        }
        db.update(id, req.body)
        res.redirect(`/clients/${id}`)
    })
    .delete('/:id', (req, res) => {
        const client = db.getOne(`${req.params.id}`);
        if (!client) {
            throw new NotFoundError()
        }
        db.delete(req.params.id)
        res.redirect('/')
    })
    .get('/form/edit/:id', (req, res) => {
        const client = db.getOne(`${req.params.id}`);
        if (!client) {
            throw new NotFoundError()
        }
        res.render('client/forms/edit', {
            client,
        })
    })
    .get('/add/form', (req, res) => {
        res.render('client/forms/add');
    })
