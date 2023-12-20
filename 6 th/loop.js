
// for loop

for(let a = 0 ;
     a < 50 ; 
     a = a + 5)
     
    {
    console.log(a)
    }






// odd even

for( let a = 0 ; a<100; a++ ){
    if(a % 2 ==0){
        console.log(a + " is even")
    }
    else{
        console.log(a + " is odd")
    }
}




// factorial

let fact = 1

for( let b = 5 ;  b != 0; b--  ){
    fact = fact * b
}

console.log(fact)




// armstrong number

let num = 153
let d
let org = num
let sum = 0


// method 1:
for(num = 153 ; num !=0 ; num = parseInt(num/10)){
    d = num % 10
    sum = sum + (d * d * d)
}
console.log(sum)


// method 2:
// for(num = 153 ; num !=0 ; num = parseInt(num)){
//     d = num % 10
//     sum = sum + (d * d * d)
//     num = num / 10 
// }
// console.log(sum)





// reverse of numbers

let num1 = 121
let e
let rev = 0
let org1 = num1

for(num1 = 121 ; num1 != 0 ; num1 = parseInt(num1) ){
    e = num1 % 10
    rev = rev * 10 + e
    num1 = num1 / 10
}
if (org1 == rev){
    console.log("is a palindrome")
}else{
    console.log("is not a palindrome")
}

console.log(rev)



