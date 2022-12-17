var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ValidationError } from "../utils/errors";
import { v4 as uuid } from "uuid";
import { pool } from "../utils/db";
export class GiftRecord {
    constructor(obj) {
        if (!obj.name || obj.name.length < 3 || obj.name.length > 55) {
            throw new ValidationError('Nazwa prezentu musi mieć od 3 do 55 znaków.');
        }
        if (!obj.count || obj.count < 1 || obj.count > 999999) {
            throw new ValidationError('Liczba szt. prezentu powinna się mieścić w przedziale 1 - 999999.');
        }
        this.id = obj.id;
        this.name = obj.name;
        this.count = obj.count;
    }
    static listAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const [results] = (yield pool.execute("SELECT * FROM `gifts`"));
            return results.map(obj => new GiftRecord(obj));
        });
    }
    static getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [results] = yield pool.execute("SELECT * FROM `gifts` WHERE `id` = :id", {
                id,
            });
            return results.length === 0 ? null : new GiftRecord(results[0]);
        });
    }
    insert() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.id) {
                this.id = uuid();
            }
            yield pool.execute("INSERT INTO `gifts` VALUES(:id, :name, :count)", {
                id: this.id,
                name: this.name,
                count: this.count,
            });
            return this.id;
        });
    }
    countGivenGifts() {
        return __awaiter(this, void 0, void 0, function* () {
            const [[{ count }]] /* answer[0][0].count */ = yield pool.execute("SELECT COUNT(*) AS `count` FROM `children` WHERE `giftId` = :id", {
                id: this.id,
            });
            return count;
        });
    }
}
module.exports = {
    GiftRecord,
};
//# sourceMappingURL=gift.record.js.map