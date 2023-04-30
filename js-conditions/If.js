let age=27
if(age>18){
    console.log("You are an adult")
}

let score=27
if(score<=50){
    console.log("You failed the test")
}

let name="John"
if (name=="John"){
    console.log("Hello, "+name)
}

let day="Monday"
if (day!="Saturday" && day!="Sunday"){
    console.log("It's a weekday")
}

let num=4
if(num%2==0)
{console.log("The number is even")}

let char="a"
if (char.length==1){
    console.log("t's a letter")
}

let list=[1,2,3]
console.log(Array.isArray(list) ? "It's an array" : "False")

let x=5
if(x>0){
    console.log(x +" is a positive number")
}

let y=5
if(y<0){
    console.log(y +" is a negative number")
}

let z=9
if(z%3==0){
    console.log(z +"is a multiple of 3")
}

let gpa=3.5
if(gpa>=3){
    console.log("Congratulations, you have a good GPA!")
}

let password="mypassword123"
if(password.length>=8){
    console.log("Your password is strong")
}

age=30
if(age>=18 && age<=65){
    console.log("You are of working age")
}

let color="red"
if(color=="red" || color=="green" || color=="blue"){
    console.log(color + " is a primary color")
}

function isNumber(a){
    result=isNaN(a)
    if(result==false){
        console.log(a+" is a valid number")
    }
    else{
        console.log(a+" is not a valid number")
    }
}

isNumber(5)