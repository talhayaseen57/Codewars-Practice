function reverseWords(str) {
  // Go for it
  return str
     .split(' ')
     .map(a => a.split('').reverse().join(''))
     .join(' ');
}