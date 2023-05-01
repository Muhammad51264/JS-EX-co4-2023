let myObject={name:"Adam",
        age:25,
        gender:"male"}
console.log((Object.values(myObject)));

myObject.carrer="Developer"
console.log(myObject)
myObject.hoppy="coding"
console.log(myObject)
console.log(myObject.name)
console.log(myObject['name'])

for(let i of Object.keys(myObject)){
    console.log(`${i}: ${myObject[i]}`)
}

console.log(Object.keys(myObject));
console.log(Object.values(myObject));
console.log(Object.entries(myObject));
Object.assign(myObject, {car:"ferrari"})
console.log(myObject)
Object.freeze(myObject)
myObject.age=24
console.log(myObject.age)
Object.seal(myObject)