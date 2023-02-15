var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Router } from "express";
import { GiftRecord } from "../records/gift.record";
import { ValidationError } from "../utils/errors";
export const giftRouter = Router();
giftRouter
    .get('/:GiftId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const gift = yield GiftRecord.getOne(req.params.GiftId);
    const givenCount = yield gift.countGivenGifts();
    res.json({
        gift,
        givenCount
    });
}))
    .get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const giftsList = yield GiftRecord.listAll();
    res.json({
        giftsList,
    });
}))
    .delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.params.id);
    const gift = yield GiftRecord.getOne(req.params.id);
    if (!gift) {
        throw new ValidationError("No such gift with that ID");
    }
    if ((yield gift.countGivenGifts()) > 0) {
        throw new ValidationError("Cannot remove given gift.");
    }
    yield gift.deleteOne();
    // status 200
    res.end();
}))
    .post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newGift = new GiftRecord(req.body);
    yield newGift.insert();
    res.json(newGift);
}));
//# sourceMappingURL=gift.js.map