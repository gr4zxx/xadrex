class Tabuleiro {
    constructor() {
        this.nome = "Tabuleiro";
        this.tabuleiro = [];

        // Inicializando o tabuleiro com 8x8 casas
        for (let linha = 0; linha < 8; linha++) {
            this.tabuleiro[linha] = [];
            for (let coluna = 0; coluna < 8; coluna++) {
                this.tabuleiro[linha][coluna] = new Casa(linha, coluna);
            }
        }
        console.log(this.tabuleiro);
    }

    colocarPeca(peca, linha, coluna) {
        const casa = this.tabuleiro[linha][coluna]; // Corrigido acesso ao tabuleiro
        casa.peca = peca;
        casa.elementoHtml.innerHTML = peca.simbolo; // Corrigido o símbolo do peão
    }
}

class Casa {
    constructor(linha, coluna) {
        this.linha = linha;
        this.coluna = coluna;
        this.peca = null;

        this.elementoHtml = document.createElement('div');
        this.elementoHtml.classList.add('casa');

        if ((linha + coluna) % 2 == 0) {
            this.elementoHtml.classList.add('clara');
        } else {
            this.elementoHtml.classList.add('escura');
        }

        document.getElementById('tabuleiro').appendChild(this.elementoHtml);
    }
}

class Peca {
    constructor(cor, linha, coluna) {
        this.cor = cor;
        this.linha = linha;
        this.coluna = coluna;
        this.simbolo = "";
    }

    movimentosPossiveis() {
        return [];
    }

    moverPara(novaLinha, novaColuna) {
        this.linha = novaLinha;
        this.coluna = novaColuna;
    }
}

class Peao extends Peca {
    constructor(cor, linha, coluna) {
        super(cor, linha, coluna);
        this.simbolo = cor === 'branca' ? '&#9817;' : '&#9823;'; // Símbolos de peão branco e preto
    }
}

// Criando o tabuleiro
const tabuleiro = new Tabuleiro();

// Adicionando 8 peões na segunda linha (linha 1, colunas 0 a 7)
for (let coluna = 0; coluna < 8; coluna++) {
    const peao = new Peao('branca', 1, coluna);
    tabuleiro.colocarPeca(peao, 1, coluna);
}
