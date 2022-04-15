// eslint-disable-next-line max-classes-per-file
class Personaje {
  nombre;
  familia;
  edad;
  serie = "Juego de tronos";
  estado = true;

  constructor(nombre, familia, edad) {
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
  }
}

class Rey extends Personaje {
  anosDeReinado;
  frase = "Vais a morir todos";

  constructor(nombre, familia, edad, anosDeReinado) {
    super();
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    this.anosDeReinado = anosDeReinado;
  }
}

class Luchador extends Personaje {
  arma;
  destreza;
  frase = "Primero pego y luego pregunto";

  constructor(nombre, familia, edad, arma, destreza) {
    super();
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    this.arma = arma;
    this.destreza = destreza;
  }
}

class Asesor extends Personaje {
  asesora;
  frase = "No sé por qué, pero creo que voy a morir pronto";

  constructor(nombre, familia, edad, asesora) {
    super();
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    this.asesora = asesora;
  }
}

class Escudero extends Personaje {
  sirve = "Luchador";
  pelotismo;
  frase = "Soy un looser";

  constructor(nombre, familia, edad, sirve, pelotismo) {
    super();
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    this.sirve = sirve;
    this.pelotismo = pelotismo;
  }
}

const personaje1 = new Rey("Joffrey", "Baratheon", 16, 3);
console.log(personaje1);

const personaje2 = new Luchador("Jaime", "Lannister", 40, "Espada", 10);
console.log(personaje2);

const personaje3 = new Luchador("Daenerys", "Targaryen", 18, "Fuego", 10);
console.log(personaje3);

const personaje4 = new Asesor("Tyrion", "Lannister", 30, "Rey");
console.log(personaje4);

const personaje5 = new Escudero("Bronn", "Lannister", 45, 1);
console.log(personaje5);
