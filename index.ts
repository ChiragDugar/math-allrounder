const precisionDefaultValue: number = 2;
const pi = Math.PI;

//ADDING ELEMENTS
export const add = (array: number[]): number => {
  let add: number = 0;
  array.forEach((el) => {
    add += el;
  });
  return add;
};

//SUBTRACTING ELEMENTS
export const sub = (array: number[]): number => {
  let sub: number = array[0];
  for (let i = 1; i < array.length; i++) {
    sub -= array[i];
  }
  return sub;
};

//DIVIDING ELEMENTS
export const div = (
  array: number[],
  precision: number = precisionDefaultValue
): number => {
  let div: number = array[0];
  for (let i = 1; i < array.length; i++) {
    div /= array[i];
  }
  return parseFloat(div.toPrecision(precision));
};

//MULTIPLYING ELEMENTS
export const mul = (array: number[]): number => {
  let mult = 1;
  for (let i = 0; i < array.length; i++) {
    mult *= array[i];
  }
  return mult;
};

//SQUARE ROOT
export const sqrt = (
  value: number,
  precision: number = precisionDefaultValue
): number | string => {
  if (value > 0) return parseFloat(Math.sqrt(value).toFixed(precision));
  else return parseFloat(Math.sqrt(-1 * value).toFixed(precision)) + "i";
};

//POWER
export const pow = (
  a: number,
  b: number,
  precision: number = precisionDefaultValue
): number => {
  return parseFloat(Math.pow(a, b).toFixed(precision));
};

//LOGARITHM
export const log = (
  value: number,
  base: number = 10,
  precision: number = precisionDefaultValue
): number => {
  return parseFloat((Math.log(value) / Math.log(base)).toFixed(precision));
};

//FACTORIAL
export const fact = (value: number): number => {
  if (value % 1 !== 0) {
    throw new Error("Factorial can be computed only for integers!");
  }
  let fact: number = 1;
  for (let i = value; i > 0; i--) {
    fact *= i;
  }
  return fact;
};

//E function
export const e = (
  exponent: number,
  precision: number = precisionDefaultValue
): number => {
  return parseFloat(Math.exp(exponent).toFixed(precision));
};

//Modulus Operator
export const mod = (
  a: number,
  b: number,
  precision: number = precisionDefaultValue
): number => {
  return parseFloat((a % b).toFixed(precision));
};
