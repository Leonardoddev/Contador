function contar() {
    let ini = Number(document.getElementById('txti').value);
    let fim = Number(document.getElementById('txtf').value);
    let passo = Number(document.getElementById('txtp').value);
    let res = document.getElementById('res');

    if (isNaN(ini) || isNaN(fim) || isNaN(passo) || ini === 0 || fim === 0 || passo === 0) {
        window.alert('[ERRO] Falta de dados ou dados inválidos!');
        res.innerHTML = 'Impossível contar!';
    } else {
        res.innerHTML = 'Contando: <br>';

        if (passo <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1');
            passo = 1;
        }

        if (ini < fim) {
            // Contagem crescente
            for (let c = ini; c <= fim; c += passo) {
                res.innerHTML += `${c} \u{1F449} `;
            }
        } else {
            // Contagem decrescente
            for (let c = ini; c >= fim; c -= passo) {
                res.innerHTML += `${c} \u{1F449} `;
            }
        }
        res.innerHTML += '\u{1F3C1}';
    }
}