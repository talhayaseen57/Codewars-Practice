function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  //var rna = '';
  //for (var a of dna)
  //  {
  //    if (a == 'T')
  //      {
  //        rna += 'U'
  //      }
  //    else
  //    {
  //        rna += a        
  //    }
  //  }
  //return rna;
  
  //return dna.split('').map(x => (x=='T') ? x='U' : x=x).join('');
  return dna.replace(/T/g, 'U');
}