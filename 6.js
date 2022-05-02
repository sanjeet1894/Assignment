function sum(N)
  {
    let total=0;
    for(let i=1; i<=N; i++)
      {
         total +=i;
      }
    return total;
  }
let N=10;
document.write("The sum of the value from 1 to N is :" + sum(N));
  