function criar() {
    let vinput = document.querySelector(".create").value;
    let li = document.createElement("li");
    document.querySelector("ul").appendChild(li);
    li.innerHTML = "<input type='checkbox' onclick='concluido(this)'>" +"<span>"+vinput+"</span>" + "<button onclick='apagar(this)'>❌</button>";

    document.querySelector(".create").value = "";
    console.log(li)
}
function concluido(value) {
    let span=value.parentElement.querySelector('span')
    if(value.checked===true){
    span.style.textDecoration='line-through'
}else{
span.style.textDecoration='none'
}
}
function apagar (value){
  value.parentElement.remove();
  console.log(value)
}