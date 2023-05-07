interface IHabilidad {
  tipo: string;
  danioBase: number;
  escalaDanio: number;
}

interface IClase {
  nombre: string;
  habilidades: IHabilidad[];
}

interface IPersonaje {
  nombre: string;
  vida: number;
  mana: number;
  clase: IClase;
  atacar(objetivo: IPersonaje, habilidad: IHabilidad): void;
}

class Personaje implements IPersonaje {
  nombre: string;
  vida: number;
  mana: number;
  clase: IClase;

  constructor(nombre: string, vida: number, mana: number, clase: IClase) {
    this.nombre = nombre;
    this.vida = vida;
    this.mana = mana;
    this.clase = clase;
  }

  atacar(objetivo: IPersonaje, habilidad: IHabilidad): void {
    const danio = habilidad.danioBase + this.clase.habilidades[0].escalaDanio * this.mana;
    objetivo.vida -= danio;
    console.log(`${this.nombre} ataca a ${objetivo.nombre} con ${habilidad.tipo} y causa ${danio} puntos de daño`);
  }
}

class Guerrero implements IClase {
  nombre = "Guerrero";
  habilidades: IHabilidad[] = [
    { tipo: "ataque básico", danioBase: 10, escalaDanio: 0.2 },
    { tipo: "golpe crítico", danioBase: 20, escalaDanio: 0.3 },
  ];
}

class Mago implements IClase {
  nombre = "Mago";
  habilidades: IHabilidad[] = [
    { tipo: "ataque básico", danioBase: 5, escalaDanio: 0.1 },
    { tipo: "bola de fuego", danioBase: 30, escalaDanio: 0.5 },
  ];
}

const guerrero = new Guerrero();
const mago = new Mago();
const jugador1 = new Personaje("Jugador 1", 100, 50, guerrero);
const jugador2 = new Personaje("Jugador 2", 80, 100, mago);

jugador1.atacar(jugador2, guerrero.habilidades[0]);
jugador2.atacar(jugador1, mago.habilidades[1]);
