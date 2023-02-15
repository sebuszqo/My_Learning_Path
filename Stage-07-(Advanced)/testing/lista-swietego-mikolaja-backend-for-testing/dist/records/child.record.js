var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { pool } from "../utils/db";
import { ValidationError } from "../utils/errors";
import { v4 as uuid } from "uuid";
export class ChildRecord {
    constructor(obj) {
        if (!obj.name || obj.name.length < 3 || obj.name.length > 25) {
            throw new ValidationError('Imię musi mieć od 3 do 25 znaków.');
        }
        this.id = obj.id;
        this.name = obj.name;
        this.giftId = obj.giftId;
    }
    static listAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const [results] = yield pool.execute("SELECT * FROM `children` ORDER BY `name` ASC");
            return results.map(obj => new ChildRecord(obj));
        });
    }
    static getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [results] = yield pool.execute("SELECT * FROM `children` WHERE `id` = :id", {
                id,
            });
            return results.length === 0 ? null : new ChildRecord(results[0]);
        });
    }
    insert() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.id) {
                this.id = uuid();
            }
            yield pool.execute("INSERT INTO `children`(`id`, `name`) VALUES(:id, :name)", {
                id: this.id,
                name: this.name,
            });
            return this.id;
        });
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            yield pool.execute("UPDATE `children` SET `name` = :name, `giftId` = :giftId WHERE `id` = :id", {
                id: this.id,
                name: this.name,
                giftId: this.giftId,
            });
        });
    }
}
//# sourceMappingURL=child.record.js.map