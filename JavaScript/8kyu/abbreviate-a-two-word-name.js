function abbrevName(name){

  // code away
  //var nameArray = name.split(" ");
  //console.log(nameArray);
  //var alphabets = [];
  //for (const n of nameArray)
  //  {
  //    console.log(n);
  //    alphabets.push(n.charAt(0).toUpperCase())
  //  }
  //console.log(alphabets)
  //return name.split(x => x.charAt(0).toUpperCase()).join(".");
  //return alphabets.join('.');
  
  //var alphabets = []
  //name.split(" ").forEach(x => 
  //  alphabets.push(x.charAt(0).toUpperCase())
  //);
  //console.log(alphabets);
  //return alphabets.join('.');
  
  return name.split(" ").map(x => x[0].toUpperCase()).join(".");
}