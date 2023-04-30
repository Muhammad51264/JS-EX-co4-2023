counter=0
while(counter<2){
    for(let i=2;i<=50;i+=2){
        console.log(i)
        }
    counter++
    }

console.log("----------------------------------------------------")
for(let i=2;i<=50;i+=2){
    console.log(i)
    console.log(i)
    }

console.log("----------------------------------------------------")

    for(let i=2;i<=50;i+=2){
        console.log(i)
        }
    console.log("----------------------------------------------------")
    counter=1
    while(counter<=50){

        console.log(counter)
        counter+=2
    }

    console.log("----------------------------------------------------")
    for(let i=1;i<=100;i++){
        if(i%3==0 && i%5==0){
        console.log("Fizz Buzz")
        
        }else if(i%3==0){
            console.log("Fizz")
        }else if(i%5==0){
            console.log("Buzz")
        }else{
            console.log(i)
        }

    }

    console.log("----------------------------------------------------")

    function FizzBuzz(i){
        if(i%3==0 && i%5==0){
            console.log("Fizz Buzz")
            
            }else if(i%3==0){
                console.log("Fizz")
            }else if(i%5==0){
                console.log("Buzz")
            }else{
                console.log(i)
            }
    
    }
    for(let i=1;i<=100;i++){
        FizzBuzz(i)
    }
    
    console.log("----------------------------r------------------------")


    function FizzBuzz_recursive(i){
        if(i%3==0 && i%5==0){
            console.log("Fizz Buzz")
            
            }else if(i%3==0){
                console.log("Fizz")
            }else if(i%5==0){
                console.log("Buzz")
            }else{
                console.log(i)
            }

            if(i<100){
                FizzBuzz_recursive(i+1)
            }
    
    }

    FizzBuzz_recursive(80)


    function BankNotes_converter(num){
        banknotes=[25,10,5,1]
        result=""
        sum=num
        for(let i of banknotes){
            if(sum!=0){
            result+=' ,' + Math.floor(sum/i)
            sum-=Math.floor(sum/i)*i
        }else{
            result+=' ,' +0
        }
        }
        return result.slice(2)
    }


    console.log(BankNotes_converter(367))

console.log("------------------charcounter-----------------")
function char_counter(word,letter){
    counter=0
    word=word.toLowerCase()
    letter=letter.toLowerCase()
    for(let i of word){
        if (i==letter){
            counter++
        }
    }
    return counter
}

console.log(char_counter("Orange Coding Academy","a"))

for(let i=0;i<=20;i++){

console.log(i)
}

for(let i=3;i<=29;i+=2){

    console.log(i)
}

for(let i=12;i>=-14;i-=2){

    console.log(i)
}

for(let i=48;i>=20;i-=3){

    console.log(i)
    }

random_list=[7, 500, 'KH404', 'black', 36]
orange="CodingAcademy"
for(let i of random_list){
    console.log(i)
}

for(let i=orange.length;i>=0;i--){
    console.log(orange[i])
}

numbers=[7, 23, 18, 9, -13, 38, -10, 12, 0, 124]
even=[]
odd=[]

for(let i of numbers){
    if(i%2==0){
        even.push(i)
    }else{
    odd.push(i) 
}
}
console.log(even)
console.log(odd)

protein=['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans']
grain=['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers']
vegetable=['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus']
beverage=['juice', 'milk', 'water', 'soy milk', 'soda', 'tea']
desert=['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi']
meals_num=8
meals=[]
previous_meal=[]
for(let i=1;i<=meals_num;i++){
    meal=[]
    random=Math.floor(Math.random()*6)
    meal=[protein[random],grain[random],vegetable[random],beverage[random],desert[random]]
    if((meal[0]==previous_meal[0] && meal[1]==previous_meal[1] && meal[2]==previous_meal[2] && meal[3]==previous_meal[3] && meal[4]==previous_meal[4] && meal[5]==previous_meal[5]))
    {console.log("Repeated_meal")
     i--    
    }
    else{
        
        meals.push(meal)
    }
    
    previous_meal=meal
}
console.log(meals)
