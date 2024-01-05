//use of reduce =>Shopping Cart me use hota hai

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10

const total=array1.reduce((acc,ini)=>(acc+ini),0);
console.log(`Total: ${total}`);
