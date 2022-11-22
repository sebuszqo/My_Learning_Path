var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getTodo(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const data = yield res.json();
        return data;
    });
}
(() => __awaiter(this, void 0, void 0, function* () {
    const todo = yield getTodo(10);
    console.log(todo.title, todo.completed ? "is completed" : "is to be done");
}))();
// typ generyczny to tablica
//const ar: Array<number> [1,2,3]
//# sourceMappingURL=typy-generyczne.js.map