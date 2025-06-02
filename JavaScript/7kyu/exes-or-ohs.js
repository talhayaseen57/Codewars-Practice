function XO(str) {
  //code here
  //var xs = (str.match(/x/ig) || []).length;
  //console.log(xs);
  //var os = (str.match(/o/ig) || []).length;
  //console.log(os);
  
  return (str.match(/x/ig) || []).length == (str.match(/o/ig) || []).length;
}