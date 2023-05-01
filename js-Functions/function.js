function get_smallest(arr){
    min=arr[0];
    for(let i of arr){
        if(i<min){
            min=i;
        }
    }
    return min;
}
console.log(get_smallest([30,45,67,7]));

function alpha_order(str){
    return str.split("").sort().join("")
}

console.log(alpha_order("hello"))

function factorial(num){
    fact=1
    for(let i = num;i>0;i--)
    {
        fact*=i;
    }
    return fact
}

console.log(factorial(8))


function oddOrEven (num){
    if (num%2==0){
        return "Even"
    }else{
        return "Odd"
    }
}

console.log(oddOrEven(10))

function evenNum(arr){
    return arr.filter(x=>x%2==0)
}
console.log(evenNum([1,2,3,4,5,6,7,8,9,10]))

function numbersOnly(arr){
    return arr.filter((x)=>! isNaN(x))
}
console.log(numbersOnly(['ayham',3,7]))

function addUp(num){
    sum=0
    for(let i = num;i>0;i--)
    {
        sum+=i;
    }
    return sum
}

console.log(addUp(8))

function minMaxLengthAverage(arr){
    newArray=[]

    min=arr[0]
    max=arr[0]
    for(let i of arr){
        if (i<min){
            min=i
        }
    }
    for(let i of arr){
        if (i>max){
            max=i
        }
    }
    newArray[0]=min
    newArray[1]=max
    newArray[2]=arr.length
    newArray[3]=arr.reduce((x,y)=>x+y,0)/arr.length


    return newArray
}

console.log(minMaxLengthAverage([7,13,3,77,100]))

function romanNumbers(num){
    var roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
      }

      var str = '';

      for (var i of Object.keys(roman)) {
        var q = Math.floor(num / roman[i]);
        num -= q * roman[i];
        str += i.repeat(q);
      }
    
      return str;
}

console.log(romanNumbers(1989))

function countWords(str){
    return str.split(" ").length
}

console.log(countWords("hello from codingAcademy!"))

function MultipleByLength(arr){
    return arr.map(x=>x*arr.length)
}

console.log(MultipleByLength([4,2,5]))

function checkEnding(str1,str2){
    return (str1.slice(str1.length-str2.length)==str2)
}
console.log(checkEnding("CodingSchool","ool"))

function doubleChar(str){
    return str.split("").map(x=>x +x).join("")
}

console.log(doubleChar("Coding"))

function findIndex(arr,str){
        return arr.indexOf(str)
    }
console.log(findIndex(['Ali' ,'Mazen','Ayham'],"Ayham"))

function getAbsSum (arr){
    return Math.abs(arr.reduce((x,y)=>x+y,0))
}
console.log(getAbsSum([-1,-3,-5,-4,-10]))