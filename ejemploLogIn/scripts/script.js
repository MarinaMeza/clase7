$(document).ready(function(){
alert("hola");
    if(typeof(storage) !== "undefined"){
        localStorage.setItem("autor","Marina");
        //var autor = localStorage.setItem("autor");
    }else{
        alert("No esta instalado");
    }
})