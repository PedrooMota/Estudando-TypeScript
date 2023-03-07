const objetoA:  {
    readonly chaveA: string;
    chaveB: string;
} = {
    chaveA: 'valor A',
    chaveB: 'Valor B',
};
//Posso mudar o valor da chave
objetoA.chaveB = 'Outro Valor!';

console.log(objetoA);

//Não posso criar uma nova chave no objeto
// objetoA.chaveC = 'Nova chance';