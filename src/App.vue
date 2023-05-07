<template>
  <div class="escenario">
    <div class="aliados">
      <Character
        v-for="(ally, index) in allies"
        :key="index"
        :player="ally"
        :selectedPlayerId="selectedAllyId"
        @select="selectedAllyId = index"
      />
    </div>
    <div class="enemigos">
      <Character
        v-for="(enemy, index) in enemies"
        :key="index"
        :player="enemy"
        :selectedPlayerId="selectedEnemyId"
        @select="selectedEnemyId = index"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Player, classes } from './models/models';
import Character from './components/Character.vue';

const allies = [
  new Player(0, 'p1', 100, classes[0], false),
  new Player(1, 'p2', 100, classes[0], false),
];

const enemies = [
  new Player(0, 'e1', 100, classes[0], true),
  new Player(1, 'e2', 100, classes[0], true),
];

let selectedAllyId: number | null = 1;
let selectedEnemyId: number | null = 1;
</script>

<style lang="scss">
.escenario {
  display: flex;
  gap: 10px;
}

.aliados,
.enemigos {
  display: flex;
  flex-direction: row;
}
.aliados {
  border: 0.5px solid blue;
}
.enemigos {
  border: 0.5px solid red;
}
</style>
