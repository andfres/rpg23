import type { CharacterClass } from './classes'

export interface Player {
  id: number
  name: string
  hp: number
  classType: CharacterClass
  enemy: boolean
  speed: number
}
