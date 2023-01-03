const {Router} = require("express");
const {GiftRecords} = require("../records/gift.records");


const giftRouter = Router()

giftRouter
    .post('/', async (req, res) => {
        const data = {
            ...req.body,
            count: Number(req.body.count)
        }
        const newGift = new GiftRecords(data)
        await newGift.insert()
        res.redirect('/gift')
    })

    .get('/', async (req, res) => {
        const giftsList = await GiftRecords.listAll()
        res.render('gift/list', {giftsList})
    })


module.exports = {
    giftRouter,
}