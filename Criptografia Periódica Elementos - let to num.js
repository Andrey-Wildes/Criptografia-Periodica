let prompt = require("prompt-sync")({ sigint: false });
let elementos = {
    "(1)": "H", "(2)": "HE", "(3)": "LI", "(4)": "BE", "(5)": "B", "(6)": "C", "(7)": "N", "(8)": "O",
    "(9)": "F", "(10)": "NE", "(11)": "NA", "(12)": "MG", "(13)": "AL", "(14)": "SI", "(15)": "P", "(16)": "S",
    "(17)": "CL", "(18)": "AR", "(19)": "K", "(20)": "CA", "(21)": "SC", "(22)": "TI", "(23)": "V", "(24)": "CR",
    "(25)": "MN", "(26)": "FE", "(27)": "CO", "(28)": "NI", "(29)": "CU", "(30)": "ZN", "(31)": "GA", "(32)": "GE",
    "(33)": "AS", "(34)": "SE", "(35)": "BR", "(36)": "KR", "(37)": "RB", "(38)": "SR", "(39)": "Y", "(40)": "ZR",
    "(41)": "NB", "(42)": "MO", "(43)": "TC", "(44)": "RU", "(45)": "RH", "(46)": "PD", "(47)": "AG", "(48)": "CD",
    "(49)": "IN", "(50)": "SN", "(51)": "SB", "(52)": "TE", "(53)": "I", "(54)": "XE", "(55)": "CS", "(56)": "BA",
    "(57": "LA)", "(58)": "CE", "(59)": "PR", "(60)": "ND", "(61)": "PM", "(62)": "SM", "(63)": "EU", "(64)": "GD",
    "(65)": "TB", "(66)": "DY", "(67)": "HO", "(68)": "ER", "(69)": "TM", "(70)": "YB", "(71)": "LU", "(72)": "HF",
    "(73)": "TA", "(74)": "W", "(75)": "RE", "(76)": "OS", "(77)": "IR", "(78)": "PT", "(79)": "AU", "(80)": "HG",
    "(81)": "TL", "(82)": "PB", "(83)": "BI", "(84)": "PO", "(85)": "AT", "(86)": "RN", "(87)": "FR", "(88)": "RA",
    "(89)": "AC", "(90)": "TH", "(91)": "PA", "(92)": "U", "(93)": "NP", "(94)": "PU", "(95)": "AM", "(96)": "CM",
    "(97)": "BK", "(98)": "CF", "(99)": "ES", "(100)": "FM", "(101)": "MD", "(102)": "NO", "(103)": "LR", "(104)": "RF",
    "(105)": "DB", "(106)": "SG", "(107)": "BH", "(108)": "HS", "(109)": "MT", "(110)": "DS", "(111)": "RG", "(112)": "CN",
    "(113)": "NH", "(114)": "FL", "(115)": "MC", "(116)": "LV", "(117)": "TS", "(118)": "OG", "(119)": "UUE", "(120)": "UBN",
    "(121)": "UBU", "(122)": "UBB", "(123)": "UBT", "(124)": "UBQ", "(125)": "UBP", "(126)": "UBH", "(127)": "UBS", "(0)": "NU"
};
function verificarEntrada(entrada) {
    return elementos.hasOwnProperty(entrada.toUpperCase());
}
function processarCodigoSubtracao(codigo) {
    let matches = codigo.match(/\((\d+)-(\d+)\)/);
    if (!matches || matches.length !== 3) return null;
    let x = matches[1];
    let y = matches[2];
    if (!/^\d+$/.test(x) || !/^\d+$/.test(y)) return null;
    if (x.length !== 2 || y.length !== 1) return null;
    if (x[0] === y || x[1] === y) {
        return x.replace(y, '');
    } else {
        return null;
    }
}
let entrada = parseInt(prompt("Insira o código:"));
let entradaSubtracao = entrada;
let letraSubtraida = processarCodigoSubtracao(entradaSubtracao);
console.log("Letra subtraída:", letraSubtraida);
if (verificarEntrada(entrada)) {
    console.log("A entrada", entrada, "existe nos elementos.");
} else {
    console.log("Código não utilizável.");
}