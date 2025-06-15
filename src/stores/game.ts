import { defineStore } from 'pinia';
import type { Player } from '../models/player';
import { classes } from '../models/data';

export const useGameStore = defineStore('game', {
  state: () => ({
    allies: <Player[]>[
      {
        id: 1,
        name: 'Merlin',
        hp: 100,
        classType: classes.mago,
        enemy: false,
        speed: 100,
      },
    ],
    enemies: <Player[]>[
      {
        id: 2,
        name: 'Orco',
        hp: 80,
        classType: classes.guerrero,
        enemy: true,
        speed: 90,
      },
      {
        id: 3,
        name: 'Goblin',
        hp: 60,
        classType: classes.guerrero,
        enemy: true,
        speed: 50,
      },
    ],
    selectedAllyId: null as number | null,
    selectedEnemyId: null as number | null,
    turnOrder: [] as any[],
    turnIndex: 0,
  }),
  actions: {
    selectAlly(id: number) {
      this.selectedAllyId = id;
    },
    selectEnemy(id: number) {
      this.selectedEnemyId = id;
    },
    attack() {
      if (this.selectedAllyId == null || this.selectedEnemyId == null) return;

      // Ejemplo simple de ataque:
      const attacker = this.allies.find(
        (p: Player) => p.id === this.selectedAllyId
      );
      const target = this.enemies.find(
        (p: Player) => p.id === this.selectedEnemyId
      );

      if (!attacker || !target) return;

      // Resta vida (fijo por ahora)
      target.hp -= 20;
      if (target.hp < 0) target.hp = 0;
    },

    calcularOrdenTurnos() {
      this.turnOrder = [...this.allies, ...this.enemies]
        .filter((p) => p.hp > 0)
        .sort((a, b) => b.speed - a.speed);
      this.turnIndex = 0;
    },
    pasarTurno() {
      this.turnIndex = (this.turnIndex + 1) % this.turnOrder.length;
      if (this.turnOrder[this.turnIndex].hp <= 0) this.pasarTurno(); // saltar muertos
    },
    attackEnemy() {
      const atacante = this.turnOrder[this.turnIndex];
      if (!this.enemies.includes(atacante)) return; // Solo enemigos atacan
      // Elegir objetivo: un aliado vivo al azar
      const aliadosVivos = this.allies.filter((a: Player) => a.hp > 0);
      if (aliadosVivos.length === 0) return; // Fin del juego
      const objetivo =
        aliadosVivos[Math.floor(Math.random() * aliadosVivos.length)];
      // Aplica el daño (ejemplo: daño fijo o según ataque)
      objetivo.hp = Math.max(0, objetivo.hp - 20);
      // Aquí puedes añadir animación, logs, etc.
      this.pasarTurno();
    },
  },
});
