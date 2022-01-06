function renderizarProduto() {
    let espaco = document.getElementById("espaco-produto");

    let listaProduto = [
        {
            imagem: "img/home-1.jpg",
            titulo: "Teste1",
            descricao: "Teste a1"
        },
        {
            imagem: "img/home-2.jpg",
            titulo: "Teste2",
            descricao: "Teste a2"
        },
        {
            imagem: "img/home-3.jpg",
            titulo: "Teste3",
            descricao: "Teste a3"
        },
        {
            imagem: "img/home-4.jpg",
            titulo: "Teste4",
            descricao: "Teste a4"
        },
        {
            imagem: "img/home-5.jpg",
            titulo: "Teste5",
            descricao: "Teste a5"
        },
        {
            imagem: "img/home-6.jpg",
            titulo: "Teste6",
            descricao: "Teste a6"
        }
    ]

    let template = "";

    for (let index = 0; index < listaProduto.length; index++) {
        const Produto = listaProduto[index];

        console.log("Produto")

        template += `<div class="cardnews">
            <img src="${Produto.imagem}" alt="Imagem Eqipamento homo office">
            <h3>${Produto.titulo}</h3>
            <p>${Produto.descricao}</p>
        </div>`
    }

    espaco.innerHTML = template;

}

function renderizarVirtual() {
    let espaco = document.getElementById("espaco-Virtual");

    let listaVirtual = [
        {
            imagem: "img/rVirtual1.jpg",
            titulo: "Teste1",
            descricao: "Teste a1"
        },
        {
            imagem: "img/rVirtual2.jpg",
            titulo: "Teste2",
            descricao: "Teste a2"
        },
        {
            imagem: "img/rVirtual3.jpg",
            titulo: "Teste3",
            descricao: "Teste a3"
        }

    ]

    let template = "";

    for (let index = 0; index < listaVirtual.length; index++) {
        const Virtual = listaVirtual[index];

        console.log("Virtual")

        template += `<div class="cardnews">
            <img src="${Virtual.imagem}" alt="Imagem Eqipamento homo office">
            <h3>${Virtual.titulo}</h3>
            <p>${Virtual.descricao}</p>
        </div>`
    }

    espaco.innerHTML = template;

}

function renderizarJogo() {
    let espaco = document.getElementById("espaco-jogo");

    let listajogo = [
        {
            imagem: "img/Imagem-1.jpg",
            titulo: "Teste1",
            descricao: "Teste a1"
        },
        {
            imagem: "img/Imagem-2.jpg",
            titulo: "Teste2",
            descricao: "Teste a2"
        },
        {
            imagem: "img/Imagem-3.jpg",
            titulo: "Teste3",
            descricao: "Teste a3"
        },
        {
            imagem: "img/Imagem-4.jpg",
            titulo: "Teste4",
            descricao: "Teste a4"
        },
        {
            imagem: "img/Imagem-5.jpg",
            titulo: "Teste5",
            descricao: "Teste a5"
        },
        {
            imagem: "img/Imagem-6.jpg",
            titulo: "Teste6",
            descricao: "Teste a6"
        }
    ]

    let template = "";

    for (let index = 0; index < listajogo.length; index++) {
        const jogo = listajogo[index];

        console.log("jogo")

        template += `<div class="cardnews">
            <img src="${jogo.imagem}" alt="Imagem Eqipamento homo office">
            <h3>${jogo.titulo}</h3>
            <p>${jogo.descricao}</p>
        </div>`
    }

    espaco.innerHTML = template;

}


