document.addEventListener("DOMContentLoaded", function(){

document.getElementById("frm").addEventListener('submit'),function(event){
event.preventDefault()
let documento=document.getElementById("documento").value
let nombre=document.getElementById("nombre").value
let fecha=document.getElementById("fecha").value
let correo=document.getElementById("correo").value
let edad=document.getElementById("edad").value
alert(documento +nombre)

let respuesta=fetch('http://127.0.0.1:5000/insertar',{

    
})


}

})