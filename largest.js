//Program to find the largest digit

let num = 1234;
let largest = 0;
let digit=0
while (num>0)
{
   digit = num%10;
   if (digit>largest)
   {
    largest = digit;
   }
   num=Math.floor(num/10);
}
console.log("Largest digit is:",largest);