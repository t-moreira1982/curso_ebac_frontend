
const alunos = [
    {
        nome: "João",
        nota: 7.9
    },
    {
        nome: "Maria",
        nota: 3.5
    },
    {
        nome: "Ana",
        nota: 5.0
    },
    {
        nome: "Pedro",
        nota: 8.4
    },
    {
        nome: "José",
        nota: 6.8
    },
    {
        nome: "Paulo",
        nota: 9.0
    },
    {
        nome: "Carlos",
        nota: 7.5
    },
    {
        nome: "Mariana",
        nota: 4.5
    },
    {
        nome: "Lucas",
        nota: 4.0
    }
];

function alunosAprovados(alunos) {
    return alunos.nota >= 6.0;
}

console.log(alunos.filter(alunosAprovados));