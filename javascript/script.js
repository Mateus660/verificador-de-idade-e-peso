var nome = document.getElementById('nome')
var labelnome = document.getElementById('labelnome')
var validnome = false

var idade = document.getElementById('idade')
var labelidade = document.getElementById('labelidade') 

var peso = document.getElementById('peso')
var labelpeso = document.getElementById('labelpeso')


function corignome() {
    if(nome.value.length <=4) {
    labelnome.setAttribute('style', 'color: #EA9049')
    labelnome.innerHTML = 'Pelo menos 5 carateres'
    validnome = false

  } else {
    labelnome.setAttribute('style', 'color: black')
    labelnome.innerHTML = 'Nome'
    validnome = true  
  }     
} 
function verificar(){
  event.preventDefault();

  var verificar = document.getElementById('ver')
  var resulltado = document.getElementById('resultado') 

  if (nome.value == '' || idade.value == '' || peso.value == '') {
    alert('Por favor, preencha todos os campos');

  } else {
    resultado.setAttribute('style', 'display: block');
    resultado.innerHTML = `Olá ${nome.value} <br> você pesa atualmente ${peso.value} kg <br> e tem ${idade.value} anos.`;
  }
}   
