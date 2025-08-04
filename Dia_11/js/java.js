let deckId = "";
let playerCards = [];
let computerCards = [];

const cartaJugadorImg = document.getElementById("cartaP");
const cartaPcImg = document.getElementById("cartaC");
const contadorJugador = document.getElementById("cartaJ");
const contadorPc = document.getElementById("cartaPc");
const mensaje = document.getElementById("resultado");
const botonJuega = document.getElementById("jugar");


const abrir = new XMLHttpRequest();
abrir.open("GET", "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
abrir.onload = () => {
    const data = JSON.parse(abrir.responseText);
    deckId = data.deck_id;

    const repartir = new XMLHttpRequest();
    repartir.open("GET", `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=52`);
    repartir.onload = () => {
        const cartas = JSON.parse(repartir.responseText).cards;
        playerCards = cartas.slice(0, 26);
        computerCards = cartas.slice(26);
        contadorJugador.textContent = playerCards.length;
        contadorPc.textContent = computerCards.length;
    };

    repartir.send();
};
abrir.send();


function valor(cartita) {
    if (cartita === "ACE") return 11;
    if (["KING", "QUEEN", "JACK"].includes(cartita)) return 10;
    return parseInt(cartita);
}


botonJuega.addEventListener("click", () => {
    if (playerCards.length === 0 || computerCards.length === 0) {
        alert("¡El juego ha terminado!");
        return;
    }

    const jugador = playerCards.shift();
    const computador = computerCards.shift();

    cartaJugadorImg.src = jugador.image;
    cartaPcImg.src = computador.image;

    const jugadorsito = valor(jugador.value);
    const computadorsito = valor(computador.value);

    if (jugadorsito > computadorsito) {
        playerCards.push(jugador, computador);
        mensaje.textContent = "¡Ganaste la ronda!";
    } else if (computadorsito > jugadorsito) {
        computerCards.push(jugador, computador);
        mensaje.textContent = "Perdiste la ronda";
    } else {
        playerCards.push(jugador);
        computerCards.push(computador);
        mensaje.textContent = "¡Empate!";
    }

    contadorJugador.textContent = playerCards.length;
    contadorPc.textContent = computerCards.length;

    setTimeout(() => mensaje.textContent = "", 1500);

    if (playerCards.length === 0) {
        alert("¡Perdiste!");
    } else if (computerCards.length === 0) {
        alert("¡Ganaste!");
    }
});
