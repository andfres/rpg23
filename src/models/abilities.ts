// src/models/abilities.ts

export interface Ability {
  id: number;
  name: string;
  description: string;
  damage: number;
  damageType: 'fuego' | 'hielo' | 'electricidad' | 'fisico' | 'magico';
  costMana?: number;
}

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
