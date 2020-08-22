let pontuacaoUsuario = 0;
let pontuacaoComputador = 0;
const userScore_span = document.querySelector("#userScore");
const compScore_span = document.querySelector("#compScore");
const resultado_p = document.querySelector("#result");
const paperButton_img = document.querySelector("#paperButton");
const rockButton_img = document.querySelector("#rockButton");
const scissorsButton_img = document.querySelector("#scissorsButton");

// 3 tipos de variáveis!
// let -> pode usar semmpre;
// var -> pode evitar;
// const -> pode usar, quando não for alterar o valor!

//FUNÇÂO JAVASCRIPT
// declarada: function nomeDaFuncao(parametro)
//
// ARROW FUNCTION
// não declarada, sintaxe:
// () => {
    // codigo funcao
// }
// () => codigo funcao

function jogo(cliqueDoUsuario){
    jogadasPossiveisComputador = ["rock", "paper", "scissors"]
    n = Math.floor(Math.random() * 3);
    cliqueDoComptuador = jogadasPossiveisComputador[n];

    console.log(cliqueDoUsuario + cliqueDoComptuador)
    switch(cliqueDoUsuario + cliqueDoComptuador) {
        //vitória do usuário
        

        //derrota do usuário


        //empate


        //default para algum erro
    }

}



function principal() {
    paperButton_img.addEventListener("click", () => jogo("paperButton") );
    rockButton_img.addEventListener("click", () => jogo("rockButton") );
    scissorsButton_img.addEventListener("click", () => jogo("scissorsButton") );
}

principal();