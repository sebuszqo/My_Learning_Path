// @ts-ignore
class Test {
    // @ts-ignore
    @measureTime()
    // @ts-ignore
    @descrtiption("array-push()")
    push() {
        console.log('Testing push ...')
        const arr: number[] = [];
        const start = +new Date();
        for (let i = 0; i < 100000; i++) {
            arr.push(i)
        }
        const end = +new Date();
        console.log(`Push Time: ${end - start} ms.`)
    }

    // @ts-ignore
    @measureTime()
    // @ts-ignore
    @descrtiption("array-destructuring()")
    destructuring() {
        console.log('Testing destructuring ...')
        let arr: number[] = [];
        const start = +new Date();
        for (let i = 0; i < 100000; i++) {
            arr = [...arr, i]
        }
        const end = +new Date();
        console.log(`Destructuring Time: ${end - start} ms.`)
    }

    // @ts-ignore
    @measureTime()
    // @ts-ignore
    @descrtiption("arr[arr.length] = item")
    last() {
        console.log('Testing last ...')
        const arr: number[] = [];
        const start = +new Date();
        for (let i = 0; i < 100000; i++) {
            arr[arr.length] = i;
        }
        const end = +new Date();
        console.log(`Last Time: ${end - start} ms.`)
    }

}

// @ts-ignore
const testSuite = new Test();
testSuite.push();
// testSuite.destructuring();
// testSuite.last();
