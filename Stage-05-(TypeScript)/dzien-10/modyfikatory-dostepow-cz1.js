// public
// private
// protected
class Pc {
    constructor(cpu, ram) {
        this.cpu = cpu;
        this.ram = ram;
        this.isOn = false;
    }
    // constructor(public cpu: string, public ram: number) {
    // }
    on() {
        console.log("Loading BIOS ...");
        if (!this.cpu) {
            throw new Error('CPU is lacking.');
        }
        this.isOn = true;
    }
    changeCpu(newCpu) {
        if (newCpu === "") {
            throw new Error("There is no CPU");
        }
        this.cpu = newCpu;
    }
}
const myComputer = new Pc('M1', 16);
myComputer.on();
myComputer.changeCpu("M1");
console.log(myComputer);
//# sourceMappingURL=modyfikatory-dostepow-cz1.js.map