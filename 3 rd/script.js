
let year = 2023;

if (year % 100 == 0) {
    if (year % 400 == 0) {
        console.log("Entred Year is a leap year " + year + " !")
    } else {
        console.log("Entred Year is not a leap year " + year + " !")
    }
} else if (year % 4 == 0) {
    console.log("Entred Year is a leap year " + year + " !")
} else {
    console.log("Entred Year is not a leap year " + year + " !")
}

// logical leap year

if ((year % 400 == 0) || ( (year % 100 != 0) && (year % 4 == 0) )){
    console.log("Entred Year is a leap year "+ year +" using logical OP!")
}else{
    console.log("Entred Year is not a leap year "+ year +" using logical OP!")
}