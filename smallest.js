//Program to find the smallest digit

let num = 1234;
let smallest = 1;
let digit=0
while (num>0)
{
   digit = num%10;
   if (digit<smallest)
   {
    smallest = digit;
   }
   num=Math.floor(num/10);
}
console.log("Smallest digit is:",smallest);