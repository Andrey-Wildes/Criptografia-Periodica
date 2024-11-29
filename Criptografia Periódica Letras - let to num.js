const prompt = require("prompt-sync")({ sigint: false });
let map = {
    "a": "(11-7)", "b": "(5)", "c": "(6)", "d": "(48-6)", "e": "(2-1)", "f": "(9)", "g": "(80-1)", "h": "(1)",
    "i": "(53)", "j": "(0)", "k": "(19)", "l": "(3-53)", "m": "(25-7)", "n": "(7)", "o": "(8)", "p": "(15)",
    "q": "(sqrt97*4)", "r": "(24-6)", "s": "(16)", "t": "(43-6)", "u": "(92)", "v": "(23)", "w": "(74)",
    "x": "(54-[2-1])", "y": "(39)", "z": "(30-7)"
};
let entrada = prompt("Insira o texto: ").toLowerCase();
function substituirLetras(match) {
    return map[match] || match;
}
let saida = entrada.replace(/[a-z]/g, substituirLetras);
console.log(saida);