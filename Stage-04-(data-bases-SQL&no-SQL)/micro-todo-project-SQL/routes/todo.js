const express = require("express");
const {TodoRecord} = require("../records/todo.record");
const todoRouter = express.Router();


todoRouter
    .get('/', async (req, res) => {
        res.render('home/index.hbs', {todos: await TodoRecord.findAll()})
    })
    .delete('/:id', async (req, res) => {
        const {id} = req.params
        console.log(id)
        const foundTodoObj = await TodoRecord.find(id)
        console.log(foundTodoObj)
        const {title} = foundTodoObj
        const deletedId = await foundTodoObj.delete()
        res.render('deleted', {
            id: deletedId,
            title,
        })
    })
    .get('/form/update/:id', async (req, res) => {
        const foundTodoObj = await TodoRecord.find(req.params.id)
        res.render('forms/edit', {foundTodoObj})
    })
    .put('/:id', async (req, res) => {
        const {id} = req.params
        const {title, timeToGo} = req.body
        console.log(timeToGo)
        const foundTodoObj = await TodoRecord.find(id)
        try {
            const result = await foundTodoObj.update(title, timeToGo);
        } catch (e) {
            res.render('edit', {
                id, title
            })
        }

        res.render('edit', {
            id, title, timeToGo,
        })

    })
    .get('/form/add', (req, res) => {
        res.render('forms/add.hbs')
    })
    .post('/', async (req, res) => {
        const {title, timeToGo} = req.body
        const newObj = new TodoRecord({
            title: title,
            timeToGo: timeToGo,
        })
        const result = await newObj.insert()
        res.render('add.hbs', {id: result, title: title})
        res.status(201)

    })


module.exports = {
    todoRouter,
}