const {Router} = require("express");
const {ChildRecords} = require("../records/child.records");
const {GiftRecords} = require("../records/gift.records");
const {ValidationError} = require("../utils/errors");
const {giftRouter} = require("./gift");


const childRouter = Router()

childRouter
    .get('/', async (req, res) => {
        const allChildren = await ChildRecords.listAll()
        const giftsList = await GiftRecords.listAll()
        // console.log(giftsList)
        res.render('children/list', {allChildren, giftsList})
    })
    .post('/', async (req, res) => {
        const newChild = new ChildRecords(req.body)
        await newChild.insert()
        res.redirect('/child')
    })
    .patch('/gift/:id', async (req, res) => {
        // console.log(req.params)
        const child = await ChildRecords.findOne(req.params.id)
        if (child === null) {
            throw new ValidationError('Brak dziecka z podanym ID')
        }
        const gift = await GiftRecords.findOne(req.body.giftId)
        // console.log(gift)
        // console.log(child)
        if (gift) {
            console.log(gift, await gift.countGivenGifts())
        }
        // if (gift === null) {
        //     child.giftId = null
        // } else {
        //     child.giftId = gift.id
        // }
        // console.log(child)
        await child.update()

        res.redirect('/child')
    })


module.exports = {
    childRouter,
}