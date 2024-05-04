const b = new Buffer.from('abcd')
console.log(b.toString())
b.write('Other')
// console.log()
console.log(b.toString())



