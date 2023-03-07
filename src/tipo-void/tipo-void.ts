// Tipo Void // Função/Método não retorna nada
function semRetorno(...args: string[]): void {
    console.log(args.join(''));
}

const pessoa = {
    nome:  'Pedro',
    sobrenome: 'Mota',

    exibirNome(): void {
        console.log(this.nome + ' ' + this.sobrenome);
    }
};

// Imprime Pedro Mota duas vezes mas de formas diferentes
semRetorno('Pedro', ' Mota');
pessoa.exibirNome();


export default pessoa;