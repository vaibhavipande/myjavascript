
// alert("this is my 1st js code ")

// syntax to write variable.....scope variable_name =  data / value 

// scope ....let , const , variable
// variable_name....a1,data01
 
let a = 10 
let b = 20
const c = a + b 

console.log (c)
// document.write(c)
// alert(c)

// DATA-TYPES

// 1)Premitive 
// --Number(+infinity to -infinity)
// --String(anything inside "" is a string)
// --Boolean(either true/false)
// --null(expecting a message , but its empty)
// --undefined(not defined )


// 2)Non-premitive
// --objects( write inside { } -- parenthesis)
// --Array(write inside [ ] -- square brackets)
// --functions


// 1)Numbers 
let x = 123
console.log(x)
console.log(typeof(x))

// 2)String
let y = "this is my string"
console.log(y)
console.log(typeof(y))

// 3)Boolean
let z = true
console.log(z)
console.log(typeof(z))

let v = false
console.log(v)
console.log(typeof(v))

// 4)Not a number
// 123---Number
// "123"--string
// a1---not a number

// 5)null

// 6)Un-defined
console.log(typeof(v))




// 1)Objects
let student = {
    roll_no: 1 ,
    section: "A1",
    subject: "history"
}

console.log(student.roll_no)
console.log(student.section)
console.log(student.subject)

console.log(typeof(student))

// array
let numbs = [
     9,8,7,6,5,4,3,2,1,0
]

console.log(numbs)
console.log(typeof(numbs))


// mix of array and object -- oject include array

let school = [
    {
        roll : 2 ,
        subjects : "maths" 
    } ,

    {
        roll : 3 ,
        subjects : "english" 
    } ,

    {
        roll : 4 ,
        subjects : "science" 
    }
]

console.log(school)
console.log(typeof(school))


// string con-catation

// let my_name = prompt("hey! Enter you name here") 
// let my_age = prompt("now , Enter you age here") 

// let your_data = "hello my name is " + my_name + "my age is" + my_age

// console.log(your_data)


// Operators

// 1)Arithametic

// addition
let l = 30
let m = 50
let q = l + m
console.log(q)

// subtraction
let u = 80
let w = 50
let d = u - w
console.log(d)

// Multiply
let e = 2
let f = 5
let g = e * 5
console.log(g)

// divide
let h = 10
let i= 5
let j = h / i
console.log(j)

// Modulous
let k = 50
let n = 100
let o = k % n
console.log(o)



// 2)Increment , decrement 

// --postincrement

let p = 10

console.log(p)
console.log(p++)
console.log(p++)

// postdecrement

let r = 10

console.log(r)
console.log(r--)
console.log(r--)

// preincrement

let s = 10

console.log(s)
console.log(++s)
console.log(++s)
console.log(s)

// predecrement

let t = 10

console.log(t)
console.log(t--)
console.log(t--)
console.log(t)