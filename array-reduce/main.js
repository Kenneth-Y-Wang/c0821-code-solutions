const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((numberP, numberC) => numberP + numberC);
console.log('sum:', sum);

const product = numbers.reduce((numberP, numberC) => numberP * numberC);
console.log('product:', product);

const initial = 0;
const balance = account.reduce((numberP, numberC) => {
  if (numberC.type === 'deposit') {
    return numberP + numberC.amount;
  } else {
    return numberP - numberC.amount;
  }
}, initial);
console.log('balance:', balance);

const composite = traits.reduce((numberP, numberC) => Object.assign(numberP, numberC), {});
console.log('composite:', composite);
