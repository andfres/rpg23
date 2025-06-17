// stores/game.ts
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Player } from '../models/player';
import { classes } from '../models/data';

export const useGameStore = defineStore('game2', () => {
  const allies = ref<Player[]>([
    {
      id: 1,
      name: 'Merlin',
      hp: 100,
      classType: classes.mago,
      enemy: false,
      speed: 100,
    },
  ]);

  const enemies = ref<Player[]>([
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
  ]);

  const selectedAllyId = ref<number | null>(null);
  const selectedEnemyId = ref<number | null>(null);
  const turnOrder = ref<Player[]>([]);
  const turnIndex = ref(0);

  function selectAlly(id: number) {
    selectedAllyId.value = id;
  }

  function selectEnemy(id: number) {
    selectedEnemyId.value = id;
  }

  function attack() {
    if (selectedAllyId.value == null || selectedEnemyId.value == null) return;

    const attacker = allies.value.find((p) => p.id === selectedAllyId.value);
    const target = enemies.value.find((p) => p.id === selectedEnemyId.value);

    if (!attacker || !target) return;

    target.hp = Math.max(0, target.hp - 20);
  }

  function calcularOrdenTurnos() {
    turnOrder.value = [...allies.value, ...enemies.value]
      .filter((p) => p.hp > 0)
      .sort((a, b) => b.speed - a.speed);
    turnIndex.value = 0;
  }

  function pasarTurno() {
    turnIndex.value = (turnIndex.value + 1) % turnOrder.value.length;
    if (turnOrder.value[turnIndex.value].hp <= 0) pasarTurno();
  }

  function attackEnemy() {
    const atacante = turnOrder.value[turnIndex.value];
    if (!enemies.value.includes(atacante)) return;

    const aliadosVivos = allies.value.filter((a) => a.hp > 0);
    if (aliadosVivos.length === 0) return;

    const objetivo =
      aliadosVivos[Math.floor(Math.random() * aliadosVivos.length)];
    objetivo.hp = Math.max(0, objetivo.hp - 20);
    pasarTurno();
  }

  return {
    allies,
    enemies,
    selectedAllyId,
    selectedEnemyId,
    turnOrder,
    turnIndex,
    selectAlly,
    selectEnemy,
    attack,
    calcularOrdenTurnos,
    pasarTurno,
    attackEnemy,
  };
});
