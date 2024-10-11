import {formatCurrency} from '../Scripts/utils/money.js';

console.log("Test suite for formatCurrency");

console.log("Converts Cents to Dollar:");

if(formatCurrency(2095)==='20.95') {
  console.log('passed');
}
else {
  console.log('fail');
}

console.log("Checks for zero:");

if(formatCurrency(0)==='0.00') {
  console.log('passed');
}
else {
  console.log('fail');
}

console.log("Rounds up to the nearest cent:");

if(formatCurrency(2000.5)==='20.01') {
  console.log('passed');
}
else {
  console.log('fail');
}

if(formatCurrency(2000.4)==='20.00') {
  console.log('passed');
}
else {
  console.log('fail');
}