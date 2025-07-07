
let selectField=document.getElementById("selectField");
let selectText=document.getElementById("selectext");
let Options=document.getElementsByClassName("option");
let list =document.getElementById("list");
let arrow =document.getElementById("arrow");


selectField.onclick=function(){
  list.classList.toggle("hide");
  arrow.classList.toggle("rotate");
}


for(Option of Options){
  Option.onclick=function(){
    selectText.innerHTML=this.textContent;
    list.classList.toggle("hide");
    arrow.classList.toggle("rotate");
  }
}