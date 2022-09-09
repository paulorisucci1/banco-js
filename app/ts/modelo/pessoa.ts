class Pessoa {
    constructor(protected _nome : string, private _idade : number, private _dataNascimento : Date) {
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

    public toString() {
        return `{\n\tNome:${this._nome}, \n\tIdade:${this._idade}, \n\tData de nascimento:${this._dataNascimento}\n}`;
    }
}