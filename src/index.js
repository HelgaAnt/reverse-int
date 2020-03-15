module.exports = function reverse (n) {
  let str =String(Math.abs(n));
  str = str.split('').reverse().map(Number).join('');
  console.log(str);
  return str;
}


