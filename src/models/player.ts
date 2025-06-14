import type { CharacterClass } from './classes'

export interface Player {
  id: number
  name: string
  life: number
  classType: CharacterClass
  enemy: boolean
}
