// Objects

// let obj_name{
//     key1 : value1,
//     key2 : value2,
//     key3 : value3
// }

let students = {
    name: "Vaibhavi",
    number: 987654321,
    email : "vaibhavi@gmail.com"
}
console.log(students)
console.log(students.name)
console.log(students.number)
console.log(students.email)


// arrays
// []
// [elements]
// if elements are 10 , then index will 9 

let arr1 = [1,2,3,4,5]

console.log(arr1.length)

// arrsy of objects

let student1 = [
    {student_name : "vaibhavi" , student_roll : "1"  , student_subject : "maths"},
    {student_name : "vaibhavi - 1" , student_roll : "2"  , student_subject : "science"},
    {student_name : "vaibhavi - 2" , student_roll : "3"  , student_subject : "english"},
    {student_name : "vaibhavi - 3" , student_roll : "4"  , student_subject : "history"}
]

console.log(student1)


let arr2 = [1,2,3, "string" , true ]

console.log(arr2)

arr2[3] = "New"

console.log(arr2)

console.log(arr2[3])


for(let i = 0; i < arr2.length ;i++){
    console.log(arr2[i])
}




// 

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12]

let sq_numbers = []

let even_numbers = []

sq_numbers.push(1)

sq_numbers.push("string")

sq_numbers.push({name:"obj"})

sq_numbers.push(true)

console.log(sq_numbers)

for(let i = 0 ; i < numbers.length ; i++){
    let sq = numbers[i] * numbers[i]
    
    sq_numbers.push(sq)

    if(numbers[i] % 2 == 0){
        even_numbers.push(numbers[i])
    }

}

console.log(sq_numbers)

console.log(even_numbers)


// 


let arr3 = [1,2,3,4,5,6,7,8,9]

arr3.push(15)
// // add a element in the end of array

arr3.pop()
arr3.pop()
// remove the element from the end of array

arr3.shift()
// remove the element from the start of array

arr3.unshift(555)
// add the element in the start of array



console.log(arr3)