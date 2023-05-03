Myarray=[1,2,3,4,5]
Myarray.forEach(element => {
    console.log(element)
});

NewArray= Myarray.map(x=>x*2)
console.log(NewArray)

NewArray= Myarray.filter(x=>x%2==0)
console.log(NewArray)

sum=Myarray.reduce((x,y)=>x+y,0)
console.log(sum)

console.log(Myarray.sort())

console.log(Myarray.reverse())
console.log(Myarray.concat(Myarray))
console.log(Myarray.slice(2,4))

Myarray.splice(0,1,3)
console.log(Myarray)

console.log(Myarray.indexOf(2))

console.log(Myarray.join(","))
console.log("1,2,3,4,5".split(","))
console.log(Myarray.length)

for(let i of Myarray){
    console.log(i)
}
for(let i in Myarray){
    console.log(i)
}

console.log(Array.isArray(Myarray))

obj={0:'1',1:"2",2:"3"}
console.log(Array.from(Object.values(obj)))
console.log(Array.of(1,2,3))
myarr=[1,2,3,4,5]
console.log(myarr.fill(0,0,3))
myarr=[1,2,3,4,5]
console.log(myarr)
console.log(myarr.copyWithin(1,0,1).copyWithin(2,0,1))
