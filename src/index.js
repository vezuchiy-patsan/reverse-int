module.exports = function reverse (n) {
  return n.toString().split('').filter(n => n != "-").reverse().join('');
}
