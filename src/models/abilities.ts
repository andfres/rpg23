// src/models/abilities.ts

export interface Ability {
  id: number;
  name: string;
  description: string;
  damage: number;
  damageType: 'fuego' | 'hielo' | 'electricidad' | 'fisico' | 'magico';
  costMana?: number;
}
