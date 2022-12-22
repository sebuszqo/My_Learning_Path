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
import { ChildRecord } from "../records/child.record";
import { GiftRecord } from "../records/gift.record";
import { ValidationError } from "../utils/errors";
export const childRouter = Router();
childRouter // /child
    .get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const childrenList = yield ChildRecord.listAll();
    const giftsList = yield GiftRecord.listAll();
    res.render('children/list', {
        childrenList,
        giftsList,
    });
}))
    .post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newChild = new ChildRecord(req.body);
    yield newChild.insert();
    res.redirect('/child');
}))
    .patch('/gift/:childId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const child = yield ChildRecord.getOne(req.params.childId);
    if (child === null) {
        throw new ValidationError('Nie znaleziono dziecka z podanym ID.');
    }
    const gift = req.body.giftId === '' ? null : yield GiftRecord.getOne(req.body.giftId);
    if (gift) {
        if (gift.count <= (yield gift.countGivenGifts())) {
            throw new ValidationError('Tego prezentu jest za mało.');
        }
    }
    child.giftId = (_a = gift === null || gift === void 0 ? void 0 : gift.id) !== null && _a !== void 0 ? _a : null;
    yield child.update();
    res.redirect('/child');
}));
//# sourceMappingURL=child.js.map