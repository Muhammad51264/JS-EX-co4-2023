let div =document.createElement("div");
document.body.appendChild(div);
div.style.display = "table";
div.style.margin = "0 auto";
div.style.paddingTop = "100px";

let br=document.createElement("br");
let br1=document.createElement("br");
let br2=document.createElement("br");

let emailContainer=document.createElement("div");
div.appendChild(emailContainer);


let elabel =document.createElement("label");
elabel.innerHTML="Email: ";
emailContainer.appendChild(elabel);
emailContainer.appendChild(br);
let email=document.createElement("input");
email.type="text";
email.id="email";
emailContainer.appendChild(email);
email.style.width="300px";
email.style.height="30px";

let required=document.createElement("p");
required.id="emailR"
required.innerHTML="Required";
required.style.display="none";
required.style.color="red";
required.style.marginTop="1px";
emailContainer.append(required);


let passContainer=document.createElement("div");
div.appendChild(passContainer);

passContainer.style.marginTop="10px";
let plabel =document.createElement("label");
plabel.innerHTML="Password: ";
passContainer.appendChild(plabel);
passContainer.appendChild(br1);
let password=document.createElement("input");
password.type="text";
password.id="password";
passContainer.appendChild(password);
password.style.width="300px";
password.style.height="30px";

let required1=document.createElement("p");
required1.innerHTML="Required";
required1.id="emailR1"
required1.style.display="none";
required1.style.color="red";
required1.style.marginTop="1px";
passContainer.append(required1);

let confirmPassContainer=document.createElement("div");
div.appendChild(confirmPassContainer);

confirmPassContainer.style.marginTop="10px";
let clabel =document.createElement("label");
clabel.innerHTML="Confirm Password: ";
confirmPassContainer.appendChild(clabel);
confirmPassContainer.appendChild(br2);
let cpassword=document.createElement("input");
cpassword.type="text";
cpassword.id="cpassword";
confirmPassContainer.appendChild(cpassword);
cpassword.style.width="300px";
cpassword.style.height="30px";

let required2=document.createElement("p");
required2.innerHTML="Required";
required2.id="emailR2"
required2.style.display="none";
required2.style.color="red";
required2.style.marginTop="1px";
confirmPassContainer.append(required2);

let passwordMatch=document.createElement("p");
passwordMatch.innerHTML="Passwords does not match";
passwordMatch.id="passwordM"
passwordMatch.style.display="none";
passwordMatch.style.color="red";
passwordMatch.style.marginTop="1px";
confirmPassContainer.append(passwordMatch);


let submit=document.createElement("button")
submit.appendChild(document.createTextNode("Register"));
submit.id="button"
// submit.disabled=true;
submit.style.width="100%";
submit.style.color="white";
submit.style.background="blue";
submit.style.height="30px"
submit.style.border="0px";
submit.style.marginTop="10px";
div.appendChild(submit);




function check_disable(){
    if (document.getElementById("email").value=="" || document.getElementById("password").value=="" || document.getElementById("cpassword").value=="") {
        document.getElementById("button").disabled = true;


      } else {
        document.getElementById("button").disabled = false;

      }
    }




email.addEventListener("input",check_disable);
submit.onclick=function(){
let validInfo=true

 
    
    
    
    
    if(document.getElementById("email").value==""){
        document.getElementById("emailR").style.display="block";
        validInfo=false;
    }else{
        document.getElementById("emailR").style.display="none";
    }

    if(document.getElementById("password").value==""){
        document.getElementById("emailR1").style.display="block";
        validInfo=false;
    }else{
        document.getElementById("emailR1").style.display="none";
    }

    if(document.getElementById("cpassword").value==""){
        document.getElementById("emailR2").style.display="block";
        validInfo=false;
    }else{
        document.getElementById("emailR2").style.display="none";
    }

    if(document.getElementById("password").value!=document.getElementById("cpassword").value){
        document.getElementById("passwordM").style.display="block";
        validInfo=false;
    }

    if (validInfo==true){
        alert("successful user registration.")   

    }
    
    
}

