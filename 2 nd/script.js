let a = 50;

let b = 30;

let c = 20;

let d = 5;

let e = 1;


// if 

if (a < b) {
    console.log("A is greater than B")
}
console.log("Program Completed")

// if else 

if (a > b) {
    console.log("A is greater than B")
}
else {
    console.log("B is greater than A")
}

console.log("Program Completed")

// nasted if

// 3 digit
// if(a > b){
//             if(a > c){
//             console.log("A is greater than B & C ")
//             }
//          }
// if(a > b){
//             if(a > c){
//             console.log("A is greater than B & C ")
//             }
//             else{
//             console.log("C is greater than B & A ")
//             }
//          }
// else if(b > c){
//             console.log("B is greater than A & C ")
//             }
// else{
//     console.log("C is greater than B & A")
// }


// 4 digit 
// if (a > b) {
//     if (a > c) {
//         if (a > d) {
//             console.log("A is greater than B , C & D !")
//         } else {
//             console.log("D is greater than B , C & A !")
//         }
//     } else if (c > d) {
//         console.log("C is greater than B , A & D !")
//     } else {
//         console.log("D is greater than B , C & A !")
//     }
// } else if (b > c) {
//     if (b > d) {
//         console.log("B is greater than A , C & D !")
//     } else {
//         console.log("D is greater than B , A & c !")
//     }
// } else if (c > d) {
//     console.log("C is greater than A & B , D !")
// } else {
//     console.log("D is greater than B , A & C !")
// }

// 5 digit 
if (a > b) {
    if (a > c) {
        if (a > d) {
            if (a > e) {
                console.log("A is greater than all")
            }
            else {
                console.log("E is greater than all")
            }
        }
    }
    else if (d > e) {
        if (b > e) {
            console.log("D is greater than all ")
        }
        else {
            console.log("E is greater than all ")
        }
    } else if (c > d) {
        if (c > e) {
            console.log("D is greater than all")
        } else {
            console.log("E is greater than all")
        }
    } else if (c > d) {
        if (c > e) {
            console.log("E is greater than all")
        } else {
            console.log("E is greater than all")
        }
    } else if (d > e) {
        console.log("D is greater than all")
    } else {
        console.log("E is greater than all")
    }
}

