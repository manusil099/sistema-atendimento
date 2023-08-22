import "./libs"
const inputNome = document.querySelector('#input-nome');
const selectPrioridade =document.querySelector('#select-prioridade');
const btnIncluir = document.querySelector('#btn-incluir');
const ulLista = document.querySelector('#ul-lista');
const displayNome= document.querySelector('#display-nome');
const btnChamar = querySelector('#btn-chamar');
const listadeAtendimento = new Array();

function incluir() {
    listadeAtendimento.push(inputNome.value)
}

function listar() {
  for(let nome of listadeAtendimento){
    console.log(nome)
  }
}
//eventos
btnIncluir.onckick = incluir