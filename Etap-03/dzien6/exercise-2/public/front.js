const numberAInput = document.querySelector('#number-a');
const numberBInput = document.querySelector('#number-b');
const resultDiv = document.querySelector('#result');
const form = document.querySelector('form');

function setResult(text, color) {
    resultDiv.innerText = text;
    resultDiv.style.border = `2px solid ${color}`
}

form.addEventListener('submit', async event => {
    setResult('Loading ...', 'transparent');

    event.preventDefault();
    const numberA = Number(numberAInput.value);
    const numberB = Number(numberBInput.value);
    const result = await fetch('/calc/check/', {
        method: 'POST',
        body: JSON.stringify({
            numberA,
            numberB,
        }),
        headers: {
            'Content-Type': 'application/json' // !!!!!!!!!! bardzo ważne !!!!!!!!!! aby móc to odczytać na back-endzie
        },
    });

    const data = await result.json();
    // console.log(typeof data.divider)
    const {divider} = data;
    // console.log(typeof divider)

    setResult(divider ? 'Number A can be divided by Number B' : 'Number A cannot be divided by Number B',
        divider ? 'green' : 'red')
    // if (divider) {
    //     setResult('Number A can be divided by Number B', 'green');
    //     return
    // }
    // setResult('Number A cannot be divided by Number B', 'red');


});
