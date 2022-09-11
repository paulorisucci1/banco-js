class PessoaJuridica extends Pessoa {
    constructor(_nome: string, _idade: number, _dataNascimento: Date, private readonly _cnpj: string) {
        super(_nome, _idade, _dataNascimento);
        this._adicionarSufixoAoNome();
        this._cnpj = _cnpj;
    }

    get cnpj() {
        return this._cnpj;
    }

    private _adicionarSufixoAoNome() {
        this._nome += " - Jurídica";
    }

    public toString(): string {
        return super.toString().replace("}", `\tcnpj: ${this._cnpj}\n}`);
    }
}