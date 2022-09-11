class Pessoa {

    private readonly _contas : RepositorioContas;

    constructor(protected _nome : string, private _idade : number, private _dataNascimento : Date) {
        this._contas = new RepositorioContas();
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    get idade() {
        return this._idade;
    }

    set idade(novaIdade) {
        this._idade = novaIdade;
    }

    get dataNascimento() {
        return this._dataNascimento;
    }

    set dataNascimento(dataNascimento) {
        this._dataNascimento = dataNascimento;
    }

    get contas (){
        return this._contas.getContas();
    }

    saldoTotalContas() : number {
        return this._contas.saldoTotalContas();
    }

    mediaSaldoContas() : number {
        return this._contas.mediaSaldoContas();
    }

    acrescentarConta(conta: Conta) : void {
        this._contas.adicionar(conta);
    }

    pesquisarConta(numero: string) {
        return this._contas.pesquisar(numero);
    }

    removerConta(numero: string) {
        this._contas.remover(numero);
    }

    listarContas() {
        return this._contas.getContas();
    }

    public toString() {
        return `{\n\tNome:${this._nome}, \n\tIdade:${this._idade}, \n\tData de nascimento:${this._dataNascimento}\n}`;
    }
}