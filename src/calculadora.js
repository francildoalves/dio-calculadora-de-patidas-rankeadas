let vitorias = 200;
let derrotas = 2;


function CalculaSaldoDeVitorias(vitorias, derrotas) {
    return vitorias - derrotas;
}

// ...Clssifica o nível do Heróie...

function classificaNivel(vitorias) {
    if (vitorias < 10) {
        return "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        return "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        return "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        return "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        return "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        return "Lendário";
    } else if (vitorias >= 101) {
        return "Imortal";
    } else {
        return "Opção inválida!";
    }
}

let saldoVitorias = CalculaSaldoDeVitorias(vitorias, derrotas);
let nivel = classificaNivel(saldoVitorias);

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);

