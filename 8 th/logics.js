
let full_name = prompt("Enter Name !")

let name_divider = (str) => {
    if (str) {

        if (str.indexOf(" ") == -1) {

            console.log("Please Enter Full Name in First Middle Last format")

        } else {

            str = str.trim()

            let first_name = str.slice(0, str.indexOf(" "))

            let middle_name = str.slice(str.indexOf(" ") + 1, str.lastIndexOf(" "))

            let last_name = str.slice(str.lastIndexOf(" ") + 1,
                str.length)


            console.log(first_name)
            console.log(middle_name)
            console.log(last_name)
        }
    }
    else { console.log("please pass a string") }

}

name_divider(full_name)
