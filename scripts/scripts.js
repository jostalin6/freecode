

function factorial(n)
{
  
// main logic
// logic split up 
//step 1: read input n
//step 2: decrement input by 1 id (n-1)
//step 3: multiply by previous decrement value ie n
//step: handle zero / empty in this case i will handle zero
//recursive method
if(n==0)
    return 1;
else
    return factorial(n-1) * n;
} 
 
