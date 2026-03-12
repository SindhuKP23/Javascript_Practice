//Program to find sum of digits

let num = 1234;
let sum = 0;
let digit=0
while (num>0)
{
   digit = num%10;
   sum = sum+digit;
   num=Math.floor(num/10);
}
console.log("Sum of digits is:",sum);