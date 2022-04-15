class Personaje {
  nombre;
  familia;
  edad;
  serie = "Juego de tronos";
  estado = true;

  constructor()

  comunicar(frase){
    return frase;
  }

}

class Rey extends Personaje {
  añosDeReinado;
  frase = "Vais a morir todos";

}

class Luchador extends Personaje {
  arma;
  destreza;
  frase = "Primero pego y luego pregunto";
}

class Asesor extends Personaje {
  asesora;
  frase = "No sé por qué, pero creo que voy a morir pronto";

}

class Escudero extends Personaje {
  sirve = "Luchador";
  pelotismo;
  frase = "Soy un looser";
}
