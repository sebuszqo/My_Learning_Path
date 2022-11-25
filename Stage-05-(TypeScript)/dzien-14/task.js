var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
class Tesssst {
    constructor(userName, userGender) {
        this.userName = userName;
        this.userGender = userGender;
    }
    get name() {
        return this.userName;
    }
    set name(newName) {
        if (!['Michal', 'Kuba'].includes(newName)) {
            throw new Error('Invalid name !');
        }
        this.userName = newName;
    }
    get gender() {
        return this.userGender;
    }
    set gender(newGender) {
        if (!['woman', 'men'].includes(newGender)) {
            throw new Error('Ivalid gender');
        }
        this.userGender = newGender;
    }
}
// less amount of code
class Tessssst {
    constructor() {
        // @ts-ignore
        this.name = 'Michal';
        // @ts-ignore
        this.gender = 'man';
    }
}
__decorate([
    allowListOnly(['Michal', 'Kuba']),
    __metadata("design:type", String)
], Tessssst.prototype, "name", void 0);
__decorate([
    allowListOnly(['Women', 'Man']),
    __metadata("design:type", String)
], Tessssst.prototype, "gender", void 0);
// @ts-ignore
const foobar = new Tesssst('Michal', 's');
// @ts-ignore
foobar.name = 'Kuba';
// @ts-ignore
foobar.gender = 's';
// @ts-ignore
console.log(foobar.name);
//# sourceMappingURL=task.js.map