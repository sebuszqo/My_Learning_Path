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
export const giftRouter = Router();
giftRouter
    .get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const giftsList = yield GiftRecord.listAll();
    res.render('gift/list', {
        giftsList,
    });
}))
    .post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = Object.assign(Object.assign({}, req.body), { count: Number(req.body.count) });
    const newGift = new GiftRecord(data);
    yield newGift.insert();
    res.redirect('/gift');
}));
//# sourceMappingURL=gift.js.map