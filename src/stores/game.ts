import { defineStore } from 'pinia'
import type { Player } from '../models/player'
import { classes } from '../models/data'

export const useGameStore = defineStore('game', {
  state: () => ({
    allies: <Player[]>[
      {
        id: 1,
        name: 'Merlin',
        life: 100,
        classType: classes.mago,
        enemy: false,
      },
    ],
    enemies: <Player[]>[
      {
        id: 2,
        name: 'Orco',
        life: 80,
        classType: classes.guerrero,
        enemy: true,
      },
      {
        id: 3,
        name: 'Goblin',
        life: 60,
        classType: classes.guerrero,
        enemy: true,
      },
    ],
    selectedAllyId: null as number | null,
    selectedEnemyId: null as number | null,
  }),
  actions: {
    selectAlly(id: number) {
      this.selectedAllyId = id
    },
    selectEnemy(id: number) {
      this.selectedEnemyId = id
    },
    attack() {
    if (this.selectedAllyId == null || this.selectedEnemyId == null) return

      // Ejemplo simple de ataque:
      const attacker = this.allies.find(p => p.id === this.selectedAllyId)
      const target = this.enemies.find(p => p.id === this.selectedEnemyId)

      if (!attacker || !target) return

      // Resta vida (fijo por ahora)
      target.life -= 20
      if (target.life < 0) target.life = 0 
    },
  },
})