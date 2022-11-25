var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// @ts-ignore
class Test {
    // @ts-ignore
    push() {
        console.log('Testing push ...');
        const arr = [];
        const start = +new Date();
        for (let i = 0; i < 100000; i++) {
            arr.push(i);
        }
        const end = +new Date();
        console.log(`Push Time: ${end - start} ms.`);
    }
    // @ts-ignore
    destructuring() {
        console.log('Testing destructuring ...');
        let arr = [];
        const start = +new Date();
        for (let i = 0; i < 100000; i++) {
            arr = [...arr, i];
        }
        const end = +new Date();
        console.log(`Destructuring Time: ${end - start} ms.`);
    }
    // @ts-ignore
    last() {
        console.log('Testing last ...');
        const arr = [];
        const start = +new Date();
        for (let i = 0; i < 100000; i++) {
            arr[arr.length] = i;
        }
        const end = +new Date();
        console.log(`Last Time: ${end - start} ms.`);
    }
}
__decorate([
    measureTime()
    // @ts-ignore
    ,
    descrtiption("array-push()"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Test.prototype, "push", null);
__decorate([
    measureTime()
    // @ts-ignore
    ,
    descrtiption("array-destructuring()"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Test.prototype, "destructuring", null);
__decorate([
    measureTime()
    // @ts-ignore
    ,
    descrtiption("arr[arr.length] = item"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Test.prototype, "last", null);
// @ts-ignore
const testSuite = new Test();
testSuite.push();
// testSuite.destructuring();
// testSuite.last();
//# sourceMappingURL=decorators.js.map