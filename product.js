//Program to find the product of digits

let num = 1234;
let product = 1;
let digit=0
while (num>0)
{
   digit = num%10;
   product=product*digit;
   num=Math.floor(num/10);
}
console.log("Product of a number is :",product);