// src/models/classes.ts

export interface Ability {
  id: number
  name: string
  description: string
  damage: number
  damageType: 'fuego' | 'hielo' | 'electricidad' | 'fisico' | 'magico'
  costMana?: number
}

export interface CharacterClass {
  id: number
  name: string
  description: string
  abilities: Ability[]
}

// Datos concretos para usar

export const abilities: Record<string, Ability> = {
  bolaFuego: {
    id: 1,
    name: 'Bola de Fuego',
    description: 'Lanza una bola de fuego que quema al enemigo',
    damage: 25,
    damageType: 'fuego',
    costMana: 10,
  },
  golpeHelado: {
    id: 2,
    name: 'Golpe Helado',
    description: 'Un golpe que congela y daña al enemigo',
    damage: 20,
    damageType: 'hielo',
    costMana: 5,
  },
}

export const classes: Record<string, CharacterClass> = {
  mago: {
    id: 1,
    name: 'Mago',
    description: 'Usuario de magia elemental',
    abilities: [abilities.bolaFuego, abilities.golpeHelado],
  },
  guerrero: {
    id: 2,
    name: 'Guerrero',
    description: 'Experto en combate cuerpo a cuerpo',
    abilities: [],
  },
}
