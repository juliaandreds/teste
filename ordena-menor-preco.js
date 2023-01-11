const livros = [
    {
        nome: "JavaScript",
        preco: 150,
    },
    {
        nome: "Python",
        preco: 100,
    },
    {
        nome: "Java",
        preco: 90,
    },
    {
        nome: "Angular",
        preco: 65,
    },
    {
        nome: "NodeJS",
        preco: 250,
    },
    {
        nome: "C++",
        preco: 70,
    },
]

let atual = 0;
let maisBarato = 0;

console.log (livros[0].nome);

for (let atual = 0; atual< livros.length; atual++) {
    if (livros[atual].preco < livros[maisBarato].preco) {
        maisBarato = atual;
    }
}

console.log (`O livro mais barato é: ${livros[maisBarato].nome}`);