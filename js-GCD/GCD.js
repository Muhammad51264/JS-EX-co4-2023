function GCD(num1,num2){
    let num1Dividers=[]
    let num2Dividers=[]
    let gcd=1
    for(let i=1;i<=num1;i++){
        if(num1%i==0){
            num1Dividers.push(i)
        }
    }
    for(let i=1;i<=num2;i++){
        if(num2%i==0){
            num2Dividers.push(i)
        }
    }


    for(let i of num1Dividers){
        for(let j of num2Dividers){
            if(i==j){
                gcd=j
                
            }
        }
    }
    return gcd
}

console.log(GCD(252,435)) 


function SCM(num1,num2){
    multiplier1=[]
    multiplier2=[]
    found=false
    scm=1
    mult=1
    while(!found){
        multiplier1.push(mult*num1)
        multiplier2.push(mult*num2)
        for(let i of multiplier1){
            for(let j of multiplier2){
                if(i==j){
                    scm=i

                    found=true
                    break
                }
            }
        }
        mult++
    }

    return scm
}

console.log(SCM(325,253))