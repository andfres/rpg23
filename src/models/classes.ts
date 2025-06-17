// src/models/classes.ts
import type { Ability } from './abilities';

export interface CharacterClass {
  id: number;
  name: string;
  description: string;
  abilities: Ability[];
}
