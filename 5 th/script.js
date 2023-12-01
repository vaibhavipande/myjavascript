// type 1

let a = 0

while( a <= 5 ){

    console.log(a)
    a++

}

// type 2

let b = 5

while( b >= 0 ){
    console.log(b)
    b--
}

// type 3

// odd
let num = 14;

if( num % 2 != 0 ){
    console.log(num + " is odd")
}else{
    console.log(num + " is even")
}


// even
let num2 = 15;

if( num2 % 2 != 0 ){
    console.log(num2 + " is odd")
}else{
    console.log(num2 + " is even")
}


if( num % 2 == 0 ){
    console.log(num + " is even")
}else{
    console.log(num + " is odd")
}



if( num2 % 2 == 1 ){
    console.log(num + " is odd")
}else{
    console.log(num + " is even")
}

let c = 0

while (c <= 10){
    if(c % 2 == 0){
        console.log(c + " is even !")
    }else{
        console.log(c + " is odd !")
    }
    c++
}

// factorial

let nums = 5;

let facts = 1;

while(nums != 0){
    facts = facts * nums
    nums--
}

console.log(facts)

// armstrong number

let num3  = 153;

let d;

let org = num3

let sum = 0

while(num3 != 0){

    d = num3 % 10

    sum = sum + (d * d * d)

    // updation --------type-casting
    num3 = num3 / 10
    num3 = parseInt(num3)
}

console.log(sum)






if(org == sum){
    console.log(sum + " is an armstrong number !")
}else{
    console.log(sum + " is not an armstrong number !")
}

sum = sum + (d * d * d)

sum = 27 + 8

sum = 35 + 1

sum = 36

d = num % 10

console.log(d)

num = num / 10
// type-casting..... number -> (number)parseINT

num = parseInt(num)

console.log(num)




// reverse of numbers

let num4 = 12345

let e;

let rev = 0

let org1 = num4

while (num4 != 0) {

    d = num4 % 10;

    rev = rev * 10 + d
    
    num4  = num4 / 10

    num4 = parseInt(num4)

}

console.log(rev)