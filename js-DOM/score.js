let names=[]
let scores=[]

let name=document.getElementById("name")
let score=document.getElementById("score")
let scoreResults=document.getElementById("score-table")
let resultTable=document.getElementById("result__table")
let results=document.getElementById("results")


function addScore(){
    if (name.value !='' && score.value !="" && !(isNaN(score.value))){
    names.push(name.value)
    scores.push(score.value)
//     scoreResults.innerHTML+=`<tr>
//     <td>${name.value}</td>
//     <td>${score.value}</td>
//    </tr> `

      errorMessage=document.getElementById("error-message")
            if(errorMessage!=null){
                console.log(document.getElementById("error-message"))
                resultTable.removeChild(errorMessage)
                
            }
        
}else{
    if ((resultTable.childElementCount==2)){
        let error=document.createElement("p")
        error.innerHTML="PLEASE ENTER RIGHT DATA!"
        error.id="error-message"
        error.style.color="red"
        resultTable.appendChild(error)
    } 
  

 }
}
function displayScores(){
    scoreResults.innerHTML=""
    for(let i in names){
        scoreResults.innerHTML+=`<tr>
        <td>${names[i]}</td>
        <td>${scores[i]}</td>
       </tr> `
    }
}

function displayResults(){
    if(names.length!=0){
    if (results.childElementCount==1){
        let average=document.createElement("p")
        average.id="average"
        scoresInt=scores.map(x=>x=parseInt(x,10))
        console.log(scoresInt)
        average.innerHTML=`Average score = ${scoresInt.reduce((x,y)=>x+y)/names.length}`
        results.appendChild(average)
    }else{
        let average=document.getElementById("average")
        scoresInt=scores.map(x=>x=parseInt(x,10))
        console.log(scoresInt)
        average.innerHTML=`Average score = ${scoresInt.reduce((x,y)=>x+y)/names.length}`
        results.appendChild(average)
    }
}
}


