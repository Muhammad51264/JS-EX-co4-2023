let par=document.getElementById("par");
let Myarray=par.innerHTML.split(" ");
let numberOfWords=Myarray.length;
for(let i of Myarray){
    if(i.length>=8){
        Myarray[Myarray.indexOf(i)]=`<span style="background: yellow;">${i}</span>`
        
    }
}


Editedtext=Myarray.join(" ")
par.innerHTML=Editedtext
let link=document.createElement("a");
link.innerHTML="Link"
link.setAttribute("href","https://en.wikipedia.org/wiki/JavaScript")
par.appendChild(link)

let parSeparated=document.getElementById("par__separated");
console.log(parSeparated.innerHTML)
let separatedArray=parSeparated.innerHTML.split(".");
let newText=''
for(let i of separatedArray){
    newText+=i+".<br>"
}

numberOfWordsTag=document.getElementById("number__ofwords")
number__ofwords.innerHTML=`Number of words: ${numberOfWords}`
parSeparated.innerHTML=newText.slice(0, newText.length-5)

