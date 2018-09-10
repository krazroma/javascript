let sum=0;
let array1 = [9,3,5,1,7];
let array2 = [-4,-1,-3,-12];
let array3 = [22,-3,4,-13,0,12];

function sum_of_positive(array)
{
  for (var i = 0, sum = 0; i<array.length; i++)
  {
    if ((array[i]>0) && (array[i]%2==0))
      {
        sum += array[i];
      }
    }
   return sum;
}
console.log(sum_of_positive(array1));
console.log(sum_of_positive(array2));
console.log(sum_of_positive(array3));
