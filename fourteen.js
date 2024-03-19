
// *****
// *****
// *****
// *****
// *****
let star = '';
for(let i=1; i<=5; i++){
    for(let j=1; j<=5; j++){
        document.write("* ")
    }
    document.write("<br>")
}

document.write("<br>")
document.write("######################################" + "<br>")

// *
// **
// ***
// ****
// *****

for(let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){
        document.write("* ")
    }
    document.write("<br>")
}

// *****
// ****
// ***
// **
// *

// *****
//  ****
//   ***
//    **
//     *


//for in loop 

const Student = {
    name : "rohit",
    age : 23,
    rollno : 21,
    gender : "male",
    address : "vijay Nagar",
    isStudentTopper : true,
    isStudentActive : true,
}

console.log(Student)

console.log(Student.name + Student.address)

for(const value  in Student){
    console.log(value, Student[value])
}

const dt = [1,2,3,4,5,6,7,8,9,10]

for(let i=0;i<dt.length;i++){
    console.log(dt[i])
}
console.log("##############################")   

for(const val of dt){
    console.log(val)
}


// * * * * *
// *       *
// *       *
// *       *
// * * * * *