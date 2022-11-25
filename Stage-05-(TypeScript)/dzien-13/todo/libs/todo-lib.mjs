var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class TodoApi {
    constructor() {
        this.url = `https://jsonplaceholder.typicode.com/todos/`;
    }
    getSingle(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch(`${this.url}/${id}`);
            const data = yield res.json();
            return data;
        });
    }
    listAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch(`${this.url}/`);
            const data = yield res.json();
            return data;
        });
    }
    create(task) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch(`${this.url}/`, {
                method: 'POST',
                body: JSON.stringify(task),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
            });
            const data = yield res.json();
            return data;
        });
    }
}
//# sourceMappingURL=todo-lib.js.map