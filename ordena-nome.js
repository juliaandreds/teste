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

function ordena (lista, propriedade) {
    const resultado = lista.sort((a,b) => {
        if (a[propriedade] < b[propriedade]) {
            return -1;
        }
        if (a[propriedade] > b[propriedade]) {
            return 1;
        }
        return 0;
    });
        return resultado;
}

const ordenado = ordena (livros, "preco");
console.log (ordenado);
