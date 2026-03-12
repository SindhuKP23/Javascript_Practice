//Program to count digits

let num = 1234;
let count = 0;
let digit=0
while (num>0)
{
   digit = num%10;
   count++;
   num=Math.floor(num/10);
}
console.log("Count of digits is:",count);