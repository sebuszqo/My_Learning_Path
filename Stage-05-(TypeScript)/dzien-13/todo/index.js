var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { TodoApi } from "./libs/todo-lib";
(() => __awaiter(void 0, void 0, void 0, function* () {
    const todo = new TodoApi();
    // console.log(await todo.getSingle(10))
    // console.log(await todo.listAll())
    const newToDo = yield todo.create({
        title: "Wynieść smieci",
        userId: 1,
        completed: false,
    });
    console.log(newToDo.id);
    console.log(yield todo.getSingle(newToDo.id));
}))();
//# sourceMappingURL=index.js.map