// document.body.innerHTML = '<h1 id="titulo">Titulo Legal </h1>'

// let titulo = document.getElementById("titulo")

// titulo.style.fontFamily = "Segoe UI"

// titulo.style.color = "red"

//alterar o texto de um paragrafo ao clicar em um botao
//adicionar e remover itens de uma lista
//fechar a pagina, voltar e mostrar sua localização


// let mudar = window.document.getElementById ("mudarTexto")  

// const changer = () => {
//     mudar.innerText = "Text"
// }




// const adicionarItem = () => {
//     //Criar um novo elemento li(item da lista)
//     let novoItem = document.createElement("li")

//     //Define o texto do no item
//     novoItem.textContent = "Novo Item"

//     //Identifica o elemento que vai ser adicionado
//     let lista = document.getElementById("minhaLista")

//     //Adiciona um novo item a lista
//     lista.appendChild(novoItem);
// }

// const removerItem = () => {
//     let lista = document.getElementById("minhaLista")

//     if (lista.children.length > 0){

//         lista.removeChild(lista.lastElementChild)
//     }

// }




const voltarPagina = () =>{
    window.history.back()
}

const mostrarLocate = () => {
    alert("Sua pagina esta localizada: " + window.location)
}

const fecharPagina = () => {
    window.close()
}

