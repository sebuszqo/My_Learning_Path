// public
// private
// protected


class Pc {
    protected isOn = false;

    constructor(private cpu: string, private ram: number) {
    }

    // constructor(public cpu: string, public ram: number) {
    // }

    on() {
        console.log("Loading BIOS ...");
        if (!this.cpu) {
            throw new Error('CPU is lacking.')
        }
        this.isOn = true;
    }

    changeCpu(newCpu: string) {
        if (newCpu === "") {
            throw new Error("There is no CPU")
        }
        this.cpu = newCpu
    }

}

const myComputer = new Pc('M1', 16)
myComputer.on()
myComputer.changeCpu("M1")
console.log(myComputer)