function Animal (nome, idade, peso) {
    this.nome = nome
    this.idade = idade
    this.peso = peso
};

Animal.prototype.emitirSom = function () {
    return 'Som emitido pelo animal';
};

function Gato (nome, idade, peso, raca) {
    Animal.call(this, nome, idade, peso);
    this.raca = raca;
};

Gato.prototype = Object.create(Animal.prototype);
Gato.prototype.constructor = Gato;

Gato.prototype.emitirSom = function () {
    console.log('Miau!');
};

function Cachorro (nome, idade, peso, porte) {
    Animal.call(this, nome, idade, peso);
    this.porte = porte;
}

Cachorro.prototype = Object.create(Animal.prototype);
Cachorro.prototype.constructor = Cachorro;

Cachorro.prototype.emitirSom = function () {
    console.log('Au au!');
}

const gato1 = new Gato('Frajola', 2, 3, 'Persa');
const gato2 = new Gato('Tom', 1, 2, 'Siamês');
const cachorro1 = new Cachorro('Rex', 3, 10, 'Grande');
const cachorro2 = new Cachorro('Totó', 5, 5, 'Médio');

console.log(gato1);
console.log(gato2);
console.log(cachorro1);
console.log(cachorro2);

console.log(`O ${gato1.nome} emite o seguinte som:.`);
gato1.emitirSom()
console.log(`O ${gato2.nome} é da raça: ${gato2.raca}.`	);
console.log(`O ${cachorro1.nome} é de porte ${cachorro1.porte}.`);
console.log(`O ${cachorro2.nome} tem ${cachorro2.idade} ano(s) e emite o seguinte som: `);
cachorro2.emitirSom()