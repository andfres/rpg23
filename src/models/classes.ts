// src/models/classes.ts
import type { Ability } from './abilities';
import { abilities } from './abilities';

export interface CharacterClass {
  id: number;
  name: string;
  description: string;
  abilities: Ability[];
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
};
