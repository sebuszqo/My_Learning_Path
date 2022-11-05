// Uzupełnij typy - w jaki sposób możesz to zrobić? Czy musisz coś jeszcze modyfikować?

interface OneProdcut {
    name: string;
    count: number;
    isDegradable: boolean;
}


const product: OneProdcut = {
    name: 'Opakowanie zbiorcze',
    count: 1000,
    isDegradable: false,
};

function getProductProp(obj: OneProdcut, propName: keyof OneProdcut): string | number | boolean {
    return obj[propName];
}

const count = getProductProp(product, 'count') as number;
const degraded = getProductProp(product, 'isDegradable') as boolean;
console.log(`${count.toFixed(2)} ${degraded ? 'degraded' : 'undegraded'}`)