function countPositivesSumNegatives(input) {
  // your code here
  //var result = [input.filter(i => i>0).length, input.filter(i => i<0).reduce((a,b) => a+b, 0)]
  //console.log(result)
  
  if (!input || input.length === 0) return [];

  //let count = 0, sum = 0;
  //for (let num of input) {
  //  if (num > 0) count++;
  //  else if (num < 0) sum += num;
  //}
  //return [count, sum];
  
  return input.reduce(
    ([count, sum], num) => {
      if (num > 0) count++;
      else if (num < 0) sum += num;
      return [count, sum];
    },
    [0, 0]
  );
}