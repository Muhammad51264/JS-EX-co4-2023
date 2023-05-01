console.log("...............task1...................")
const myArray =["Coding", "Academy", "By", "Orange"]
myArray.push("Jordan")
console.log(myArray)
myArray.pop()
myArray.pop()
myArray.pop()
console.log(myArray)
myArray.unshift("Welcome", "To")
myArray.push("By","Orange")
console.log(myArray)
myString =myArray.join(' ')
console.log(myString)
myArray1=myString.split(" ")
myArray1.shift()
myArray1.shift()
console.log(myArray1)
variable=myArray1[3]
myArray1.pop()
myArray1.pop()
myArray1.pop()
myArray1.push(variable)
console.log(myArray1)
console.log("...............task2...................")
var fruit = ["banana", "apple", "orange", "watermelon"]
var vegetables = ["carrot", "tomato", "pepper", "lettuce"]
vegetables.pop()
console.log(vegetables)
fruit.shift()
console.log(fruit)
console.log(fruit.indexOf("orange"))
fruit.push(fruit.indexOf("orange"))
console.log(fruit)
console.log(vegetables.length)
vegetables.push(vegetables.length)
console.log(vegetables)
const food =fruit.concat(vegetables)
console.log(food)
delete food[4]
delete food[5]
food[4]=food[6]
food[5]=food[7]
food.pop()
food.pop()
console.log(food)
food.reverse()
console.log(food)
console.log(food.toString())
console.log("...............functions...................")
function strToArray (str){
    return str.split(" ")
}
console.log(strToArray("Orange Jordan"))

function numberConverter(num){
    
    let result = num.toString()
    result=result.slice(7)
    return "*******" + result

}
console.log(numberConverter(1234567890))

function emailConverter(email){
    name=email.slice(0,email.indexOf("@"))
    name=name.slice(0,name.indexOf("_")) + "..."
    
    return name + "@orange.com"
}

console.log(emailConverter("Orange_academy@orange.jo"))

function toUpperCaseWord (word){
    word_array=word.split(" ")
    for(let i in word_array){
        restOfWord=word_array[i].slice(1)
        word_array[i]=word_array[i].toUpperCase().slice(0,1) + restOfWord
        console.log(word_array[i])
    }
    return(word_array)
}
console.log(toUpperCaseWord("coding academy by orange"))

function flip_num(num){
    let result=num.toString()
    result=result.split('').reverse().join('');
    result=parseInt(result, 10)
    return result

}

console.log(flip_num(92485))

function swap(num1,num2){
    let temp
    temp=num1
    num1=num2
    num2=temp

    return [num1,num2]
}

console.log(swap(1,5))


function removeIndex(word,index){
    let edited_word=word.replace(word[index],"")
    return edited_word
}

console.log(removeIndex("orange",3))


function merge(str1,str2){
    return str1.slice(1)+str2.slice(1)
}
console.log(merge("lora","inge"))

function searchForLetter(str,letter){
    return str.includes(letter)
}

console.log(searchForLetter("orange","o"))

function strToArray(str){
    return str.split(" ")
}
console.log(strToArray("Coding Academy By Orange"))

function reorder(str){
    array1=str.split("").sort().join("")
    return array1
}

console.log(reorder("Orange"))

console.log("...............Objects...................")

const myObject ={name:"ahmad",
                 age:26,
                 major:"coding"}
            

const myObject1 ={number:5,
                 color:"white",}




function ObjectKeys(obj){
    return Object.keys(obj)
}

console.log(ObjectKeys(myObject))

function ObjectkeysLength(obj){
    return ObjectKeys(obj).length
}
console.log(ObjectkeysLength(myObject))

function combine(obj1,obj2){
    newObj=Object.assign({},obj1,obj2)
    return newObj
}

console.log(combine(myObject,myObject1))



function object_uppercase(obj){
    obj1= Object.assign(obj, {})
    console.log(obj1.age)
    for (const i in obj1){
        if (typeof obj1[i] === "string"){
            obj1[i]=obj1[i].toUpperCase()
        }
        
    }
    return obj1
}
console.log(object_uppercase(myObject))

const myObject2 ={name:"ahmad",
                 age:26,
                 major:"coding",
                somthing:null}


myObject2.number=5
console.log(myObject2)

function NoNullValue(obj){
    let newobj={}
    for (const i in obj){
        if (obj[i]!=null){
            newobj[i]=obj[i]
        }
    }
    return newobj
}

console.log(NoNullValue(myObject2))

function sortObject(obj){
    return Object.keys(obj).sort()
}

console.log(sortObject(myObject2))