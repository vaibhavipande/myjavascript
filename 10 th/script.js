
let numbers = [ [1,2,3] , [4,5,6] , [7,8,9] ]

for(let element of numbers){
    console.log(element)
    for(let number of element){
        console.log(number)
    }
}

numbers.forEach((element)=>{
    element.forEach((number)=>{
        console.log(number)
    })
})

console.log(numbers.slice(0,2))












let nums = [1,2,3,4,5,6,1,7,8,9]

console.log(nums.indexOf(5))
console.log(nums.lastIndexOf(1))

console.log(nums.includes(7))
console.log(nums.includes(17))

nums.splice(5,2,"Vaibhavi'")

console.log(nums)













// Math class

console.log(Math.PI)
console.log(Math.E)
console.log(Math.SQRT2)
console.log(Math.SQRT1_2)
console.log(Math.LN10)
console.log(Math.LOG10E)










let a = 12

console.log(Math.pow(a,4))

console.log(Math.sqrt(144))

let b = 1.1;

console.log(Math.floor(b))
console.log(Math.ceil(b))

console.log(Math.round(b))

console.log((Math.random()*10)+1)















let dice = Math.floor((Math.random() * 6) + 1)

console.log(dice)