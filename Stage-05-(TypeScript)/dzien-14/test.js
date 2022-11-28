export class Test {
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
//# sourceMappingURL=test.js.map