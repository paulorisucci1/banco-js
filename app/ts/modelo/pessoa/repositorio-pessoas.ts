class RepositorioPessoas {

    private _pessoas: Array<Pessoa>;

    constructor() {
        this._pessoas = new Array<Pessoa>();
    }

    listar() {
        return this._pessoas;
    }

    adicionar(pessoa: Pessoa) {
        this._pessoas.push(pessoa);
    }

    pesquisar(identificador: string) {

        const pessoaFisicaEncontrada = this._buscarPessoaFisica(identificador);

        if(pessoaFisicaEncontrada) {
            return pessoaFisicaEncontrada;
        }

        return this._buscarPessoaJuridica(identificador);
    }

    remover(identificador: string) {
        const pessoaEncontrada = this.pesquisar(identificador);

        if(pessoaEncontrada) {
            const indexPessoaRemovida = this._pessoas.indexOf(pessoaEncontrada);
            if(this._isIndexValid(indexPessoaRemovida)) {
                this._pessoas.splice(indexPessoaRemovida, 1);
            }
        }
    }

    private _buscarPessoaFisica(identificador: string) {
        const pessoasFisicas = <Array<PessoaFisica>> this._pessoas.filter(pessoa => pessoa instanceof PessoaFisica);
        return pessoasFisicas.find(pessoa => pessoa.cpf === identificador);
    }

    private _buscarPessoaJuridica(identificador: string) {
        const pessoasJuridicas = <Array<PessoaJuridica>> this._pessoas.filter(pessoa => pessoa instanceof PessoaJuridica);
        return pessoasJuridicas.find(pessoa => pessoa.cnpj === identificador);
    }

    private _isIndexValid(index: number) {
        return index > -1;
    }
}