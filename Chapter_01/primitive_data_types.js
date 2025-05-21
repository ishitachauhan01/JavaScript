// Primitives in JS
//N - Null
//N - Number
//S - String
//S - Symbol
//B - Boolean
//B - Bigint
//U - Undefined

let a = null;
let b = 345;
let c = true; //can also be false
let d = BigInt("567") + BigInt("3")
let e = "Harry"
let f = Symbol("I'm a nice symbol")
let g = undefined
let h // will still give undefined
console.log(a,b,c,d,e,f,g,h)

console.log(typeof d)
console.log(typeof c)