class PessoaFisica extends Pessoa {
    constructor(_nome : string, _idade : number, _dataNascimento : Date, private readonly _cpf : string) {
        super(_nome, _idade, _dataNascimento);
        this._adicionarSufixoAoNome();
        this._cpf = _cpf;
    }

    get cpf() {
        return this._cpf;
    }

    private _adicionarSufixoAoNome() {
        this._nome += " - Física";
    }

    public toString(): string {
        return super.toString().replace("}", `\tcpf:${this._cpf}\n}`);
    }
}