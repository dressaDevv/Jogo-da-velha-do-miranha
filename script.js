let currentPlayer;
let selected;
let player = "X";

const positions = [
    [1,2,3],[4,5,6],[7,8,9], //linhas
    [1,4,7],[2,5,8],[3,6,9], //colunas
    [1,5,9],[3,5,7] //diagonais

];

function init(){
    currentPlayer = document.querySelector(".currentPlayer");
    selected = [];
    currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;

    document.querySelectorAll(".gameBoard button").forEach((item) => {
        item.innerHTML = "";
        item.addEventListener("click", newMove);
    })
}

init();

function newMove(e){
    const index = Number(e.target.getAttribute("data-i"));
    e.target.innerHTML = player;
    e.target.removeEventListener("click",newMove);
    selected[index] = player;

    setTimeout (() => {
        check();
    }, 100);
    
    player = player === "X" ? "O" : "X";
    currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;
}

function check(){
    const playerLastMove = player === "X" ? "O" : "X";

    const items = selected
    .map((item, i) => [item,i])
    .filter((item) => item[0] === playerLastMove)
    .map((item) => item[1]);
        
    for (const pos of positions){
        if (pos.every((item) => items.includes(item))){
            alert(`O JOGADOR ${playerLastMove} VENCEU!`);
            init();
            return;
        }    
    }

    if (selected.filter((item) => item).length === 9){
        alert("DEU EMPATE!");
        init();
        return;
    }
}

init();
    