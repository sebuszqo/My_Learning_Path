import {Router} from "express";
import {GiftRecord} from "../records/gift.record";
import {ValidationError} from "../utils/errors";
import {CreateGiftRequest, GetSingleGiftRes} from "../types";

export const giftRouter = Router();

giftRouter

    .get('/:GiftId', async (req, res) => {
        const gift = await GiftRecord.getOne(req.params.GiftId);
        const givenCount = await gift.countGivenGifts()
        res.json({
            gift,
            givenCount
        } as GetSingleGiftRes);
    })


    .get('/', async (req, res) => {
        const giftsList = await GiftRecord.listAll();

        res.json({
            giftsList,
        });
    })

    .delete("/:id", async (req, res) => {
        console.log(req.params.id)
        const gift = await GiftRecord.getOne(req.params.id)
        if (!gift) {
            throw new ValidationError("No such gift with that ID")
        }

        if (await gift.countGivenGifts() > 0) {
            throw new ValidationError("Cannot remove given gift.")
        }
        await gift.deleteOne()
        // status 200
        res.end();

    })

    .post('/', async (req, res) => {
        const newGift = new GiftRecord(req.body as CreateGiftRequest);
        await newGift.insert();

        res.json(newGift);
    });
