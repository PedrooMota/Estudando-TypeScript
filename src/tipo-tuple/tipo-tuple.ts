// Tuple
const dadosCliente1: readonly[number, string] = [1, 'Mota'];
const dadosCliente2: [number, string, string] = [1, 'Mota', 'Henrique'];
const dadosCliente3: [number, string, string?] = [1, 'Mota'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Mota', 'Henrique'];

console.log(dadosCliente1)
console.log(dadosCliente2)
console.log(dadosCliente3)
console.log(dadosCliente4)

// Readonly array
const array1: readonly string[] = ['Pedro', 'Mota']
const array2: ReadonlyArray<string> = ['Pedro', 'Mota']

console.log(array1)
console.log(array2)


