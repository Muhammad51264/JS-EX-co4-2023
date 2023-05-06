let itemName=document.getElementById("item-name");
let addButton=document.getElementById("add-button");
let list=document.getElementById("list");

let itemCounter=0;
function addItems(){
    itemCounter+=1;
    if(itemName.value!=""){
        
    list.innerHTML+=`<li>${itemName.value}<button onclick="deleteItem(this)" class="add" id="Item-${itemCounter}" style="margin: 10px;">delete</button></li>`;
    }

    let addedItems=list.innerHTML.split("</li>");

}


function deleteItem(button){
    
    let listItem = button.parentNode;
    listItem.parentNode.removeChild(listItem);
}


