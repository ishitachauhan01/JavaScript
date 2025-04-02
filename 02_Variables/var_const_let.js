console.log("Var vs let vs const")
let a = 45;
var b ="Ishita";
var c = null
var d = undefined
const author = "Ishita"
// const cannot be changed
// const code must be initialized/defined while declaring only
console.log(author)

{
    var b= 'this'
    console.log(b)
}
console.log(b)

{
    let a= 54
    console.log(a)
}
console.log(a)
// let is block scoped unlike var i.e. value changes within the box only
// we cannot redeclare using let