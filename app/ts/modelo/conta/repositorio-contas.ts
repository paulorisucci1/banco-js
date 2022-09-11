class RepositorioContas {

    private readonly _contas: Array<Conta>;

    constructor() {
        this._contas = new Array<Conta>();
    }

    adicionar(conta: Conta) {
        this._contas.push(conta);
    }

    pesquisar(numero: string) {
        return this._contas.find(conta => conta.numero === numero);
    }

    getContas() {
        return this._contas;
    }

    remover(numero: string) {
        const contaARemover = this.pesquisar(numero);
        if (contaARemover) {
            const indiceARemover = this._contas.indexOf(contaARemover);
            if (indiceARemover > -1) {
                this._contas.splice(indiceARemover, 1);
            }
        }
    }

    saldoTotalContas() : number {
        return this._contas
            .reduce((somador, conta) => somador += conta.getSaldo(), 0);
    }

    mediaSaldoContas() : number {
        const quantidadeDeContas = this._contas.length;
        return this.saldoTotalContas() / quantidadeDeContas;
    }
}
