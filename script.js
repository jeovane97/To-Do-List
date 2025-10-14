  
function criar() {
  let vinput = document.querySelector(".create").value;
  if (vinput.trim() !==""){
  
    let li = document.createElement("li");
    document.querySelector("ul").appendChild(li);
    li.innerHTML = "<input type='checkbox' onclick='concluido(this)'>" +"<span>"+vinput+"</span>" + "<button onclick='apagar(this)'>❌</button>";

    document.querySelector(".create").value = "";
    console.log(li)
    }else{
      Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Você precisa digitar algo no campo de tarefas!",
});
    }
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
  Swal.fire({
  title: "Deseja excluir tarefa?",
  text: "Esta ação não poderá ser desfeita!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  cancelButtonText:"Cancelar",
  confirmButtonText: "Sim, deletar !",
}).then((result) => {
  console.log(result)  
  if (result.isConfirmed) {
      value.parentElement.remove()
    Swal.fire({
      title: "Deletada!",
      text: "Sua tarefa foi deletada com sucesso.",
      icon: "success",
 
    });

  }
});
 

}