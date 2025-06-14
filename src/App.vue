<template>
  <div class="escenario">
    <div class="aliados">
      <Character
        v-for="ally in gameStore.allies"
        :key="ally.id"
        :player="ally"
        :selectedPlayerId="gameStore.selectedAllyId"
        @select="gameStore.selectAlly(ally.id)"
      />
    </div>

    <div class="enemigos">
      <Character
        v-for="enemy in gameStore.enemies"
        :key="enemy.id"
        :player="enemy"
        :selectedPlayerId="gameStore.selectedEnemyId"
        @select="gameStore.selectEnemy(enemy.id)"
      />
    </div>

    <button @click="gameStore.attack" :disabled="!canAttack">
      Atacar
    </button>
  </div>
</template>

<script setup lang="ts">
import { useGameStore } from './stores/game'
import Character from './components/Character.vue'
import { computed } from 'vue'

const gameStore = useGameStore()

const canAttack = computed(() => {
  return gameStore.selectedAllyId !== null && gameStore.selectedEnemyId !== null
})
</script>

<style scoped lang="scss">
.escenario {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 1rem;
}

.aliados,
.enemigos {
  display: flex;
  gap: 10px;
}

.aliados {
  border: 1px solid blue;
  padding: 0.5rem;
}

.enemigos {
  border: 1px solid red;
  padding: 0.5rem;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
}
</style>
