function countSheeps(sheep) {
  // TODO
  //var numberOfSheep = sheep.select(x => x == true);
  //console.log(numberOfSheep);
  
  return sheep.filter(x=>x).length;
}