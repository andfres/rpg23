// src/models/data.ts
import type { CharacterClass } from './classes';
import type { Ability } from './abilities';
import type { StatusEffect } from '@/models/StatusEffect';

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
};

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

export const statusEffects: Record<string, StatusEffect> = {
  quemadura: {
    nombre: 'Quemadura',
    descripcion: 'El objetivo recibe daño de fuego al final de cada turno.',
    icon: '/src/assets/status/quemadura.png',
  },
  congelado: {
    nombre: 'Congelado',
    descripcion: 'El objetivo pierde su próximo turno.',
    icon: '/src/assets/status/congelado.png',
  },
  envenenado: {
    nombre: 'Envenenado',
    descripcion: 'El objetivo pierde vida cada turno debido al veneno.',
    icon: '/src/assets/status/envenenado.png',
  },
  aturdido: {
    nombre: 'Aturdido',
    descripcion:
      'El objetivo no puede realizar acciones durante su próximo turno.',
    icon: '/src/assets/status/aturdido.png',
  },
};
