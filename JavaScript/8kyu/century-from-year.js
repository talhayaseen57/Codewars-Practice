function century(year) {
  // Finish this :)
  //console.log(Math.floor(year/100));
  return Math.floor(year/100) + (year % 100 == 0 ? 0 : 1);
  //return Math.ceil(year / 100);
}