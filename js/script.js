const input = document.getElementById("userInput");
const countdownDiv = document.getElementById("countdown");
const resultDiv = document.getElementById("result");
const restartBtn = document.getElementById("restart");

function generarNumero() {
  return Math.floor(Math.random() * 3) + 1;
}

function promesaBomba() {
return new Promise((resolve) => {
    setTimeout(() => {
    resolve(generarNumero());
    }, 5000);
});
}

function iniciarCuentaAtras() {
let tiempo = 5;
countdownDiv.textContent = `Cuenta atrás: ${tiempo} segundos`;

const intervalo = setInterval(() => {
    tiempo--;
    countdownDiv.textContent = `Cuenta atrás: ${tiempo} segundos`;
    if (tiempo === 0) clearInterval(intervalo);
}, 1000);
}

function iniciarJuego() {
const numeroUsuario = Number(input.value);

if (!numeroUsuario || numeroUsuario < 1 || numeroUsuario > 3) {
    resultDiv.textContent = "Introduce un número entre 1 y 3.";
    return;
}

iniciarCuentaAtras();

promesaBomba().then((numeroAleatorio) => {
    if (numeroUsuario === numeroAleatorio) {
    resultDiv.innerHTML = `
        Enhorabuena, has salvado el mundo 
        Tu número ${numeroUsuario} es el mismo que el número ${numeroAleatorio}
    `;
    } else {
    resultDiv.innerHTML = `
    La bomba ha estallado 
        Tu número ${numeroUsuario} no es el número ${numeroAleatorio}
    `;
    }
});
}

input.addEventListener("change", iniciarJuego);

restartBtn.addEventListener("click", () => {
location.reload();
});
