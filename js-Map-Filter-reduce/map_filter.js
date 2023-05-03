function cleanNames(arr){
    return arr.map(x=>x.trim());
}

console.log(cleanNames(["   injustice    ","    Superman","  batman "]));

function toKm(arr){
    totalDistanceInKilometers=arr.map(x=>x*1.609344)
    return totalDistanceInKilometers
}

console.log(toKm([10,20,30,40]));

sumSquareAverage = arr => [arr.reduce((x,y)=>x+y**2),arr.reduce((x,y)=>x+y**2)/arr.length]

console.log(sumSquareAverage([1,2,3,4,5]))

plus4=[1,2,3,4,5].map(x=>x+4)
console.log(plus4)

double_even_numbers=[1,2,3,4,5,6,7,8,9,10].filter(x=>x%2==0).map(x=>x*2).reduce((x,y)=>x+y,0)

console.log(double_even_numbers)

newArray=['apple','banana','cherry'].map(x=>x.toUpperCase())

console.log(newArray)

const heros = [
    {name: 'Iron Man', power: 'Tech'},
    {name: 'Spider-Man', power: 'Spider abilities'},
    {name: 'Thor', power: 'Godly powers'},
    {name: 'Hulk', power: 'Super strength'}
]

newHeros=heros.map((x,y)=>{return {id :y,hero:x.name,power:x.power}})
console.log(newHeros)

const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"]

console.log(inputWords.filter(x=>x.length>=7))

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(numbers.filter(x=>x%2==1))
console.log(numbers.filter(x=>x%2==0 || x%5==0))
console.log(numbers.filter(x=>x%3==0).map(x=>x**2))
console.log(numbers.filter(x=>x%5==0).reduce((x,y)=>x+y**2,0))

let nums = [11, 22, 33, 46, 75, 86, 97, 98]
squaredEvenNums=nums.filter(x=>x%2==0).map(x=>x**2)
console.log(`squaredEvenNums: ${squaredEvenNums}`)
sum=nums.reduce((x,y)=>x+y,0)
console.log(`Sum of array elements: ${sum}`);

let countries = ['India', 'United States', 'Russia', 'Japan', 'China']
filteredCountries=countries.filter(x=>x[0]!='U' && x[0]!='R')
console.log(filteredCountries)
upperCaseCountries=filteredCountries.map(x=>x.toUpperCase())
console.log(upperCaseCountries)
totalCharacters=upperCaseCountries.reduce((x,y)=>x+y.length,0)
console.log(totalCharacters)

const numbers1 = [12, 45, 67, 89, 23, 56, 73, 99, 100];
numbersGreaterThan50=numbers1.filter(x=>x>50)
console.log(numbersGreaterThan50)

