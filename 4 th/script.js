let choice = prompt("Enter your choice");

switch(choice){
    case "10": console.log("This is 10 th")
    break;
    case "20": console.log("This is 20 th")
    break;
    case "30": console.log("This is 30 th")
    break;
    case "40": console.log("This is 40th")
    break;
    case "50": console.log("This is 50 th")
    break;   
    default: console.log("nothing matched....so, this is deafult")
}

// // type casting 

//  number --> boolean
//  number --> string
//  string --> number
//  string -> boolean
//  boolean --> string
//  boolean --> number
 

// string -> number
let a = "1234"
console.log(typeof(a))

a = Number(a)

console.log(typeof(a))
console.log(a)


// string -> boolean
let b = "acd"

console.log(typeof(b))
console.log(b)

b = Boolean(b)

console.log(typeof(b))
console.log(b)



// number -> string
let c = 123456

console.log(typeof(c))
console.log(c)

c = String(c)
// or
c = c.toString()

console.log(typeof(c))
console.log(c)


// number -> boolean

// true
let d = 0

console.log(typeof(d))
console.log(d)

d = Boolean(d)

console.log(typeof(d))
console.log(d)

// false
let e = 10

console.log(typeof(e))
console.log(e)

f = Boolean(e)

console.log(typeof(e))
console.log(e)


// boolean -> string

// true
let f = true

console.log(typeof(f))
console.log(f)

f = String(f)

console.log(typeof(f))
console.log(f)

// false
let g = false

console.log(typeof(g))
console.log(g)

g = String(g)

console.log(typeof(g))
console.log(g)


