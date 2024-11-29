const prompt = require("prompt-sync")({ sigint: false });
let map = {
    "(11-7)": "a", "(5)": "b", "(6)": "c", "(48-6)": "d", "(2-1)": "e", "(9)": "f", "(80-1)": "g", "(1)": "h",
    "(53)": "i", "(0)": "j", "(19)": "k", "(3-53)": "l", "(25-7)": "m", "(7)": "n", "(8)": "o", "(15)": "p",
    "([124-92]-5)": "q", "(24-6)": "r", "(16)": "s", "(43-6)": "t", "(92)": "u", "(23)": "v", "(74)": "w",
    "(54-[2-1])": "x", "(39)": "y", "(30-7)": "z"
};
let entrada = prompt("Insira o código: ");
function substituirChaves(match) {
    return map[match] || match;
}
let saida = entrada.replace(/\(\w+(?:-\w+)?\)/g, substituirChaves);
console.log(saida);