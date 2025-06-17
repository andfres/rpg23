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
    turnOrder: [] as Player[],
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

      const attacker = this.allies.find((p) => p.id === this.selectedAllyId);
      const target = this.enemies.find((p) => p.id === this.selectedEnemyId);

      if (!attacker || !target) return;

      target.hp -= 20;
      if (target.hp < 0) target.hp = 0;

      this.siguienteTurno();
    },

    calcularOrdenTurnos() {
      this.turnOrder = [...this.allies, ...this.enemies]
        .filter((p) => p.hp > 0)
        .sort((a, b) => b.speed - a.speed);
      this.turnIndex = 0;
    },

    pasarTurno() {
      for (let i = 0; i < this.turnOrder.length; i++) {
        this.turnIndex++;
        if (this.turnIndex >= this.turnOrder.length) {
          this.turnIndex = 0;
        }
        if (this.turnOrder[this.turnIndex].hp > 0) {
          break;
        }
      }
    },

    siguienteTurno() {
      this.pasarTurno();

      const actual = this.turnOrder[this.turnIndex];

      if (actual.enemy) {
        this.attackEnemy();
        // No llamar a siguienteTurno aquí para evitar bucle infinito
      }
      // Si es aliado, esperar input del jugador
    },

    async attackEnemy() {
      const atacante = this.turnOrder[this.turnIndex];
      if (!this.enemies.includes(atacante)) return;

      const aliadosVivos = this.allies.filter((a) => a.hp > 0);
      if (aliadosVivos.length === 0) {
        // Fin del juego (puedes manejarlo aquí)
        return;
      }

      // Espera 5 segundos antes de atacar
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const objetivo =
        aliadosVivos[Math.floor(Math.random() * aliadosVivos.length)];
      objetivo.hp = Math.max(0, objetivo.hp - 20);

      // Termina el turno enemigo y pasa al siguiente turno
      this.siguienteTurno();
    },
  },

  getters: {
    ordenConTurnoActual(state) {
      return state.turnOrder.map((p, idx) => ({
        ...p,
        isCurrent: idx === state.turnIndex,
      }));
    },
  },
});
