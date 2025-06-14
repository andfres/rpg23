<template>
  <div
    class="character"
    :class="{ enemigo: player.enemy, seleccionado: isSelected }"
    @click="$emit('select')"
  >
    <div class="info">
      <strong>{{ player.name }}</strong>
      <div>Vida: {{ player.life }}</div>
      <div>Clase: {{ player.classType.name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Player } from '../models/player'
import { computed, defineProps } from 'vue'

const props = defineProps<{
  player: Player
  selectedPlayerId: number | null
}>()

const isSelected = computed(() => props.selectedPlayerId === props.player.id)
</script>

<style scoped>
.character {
  cursor: pointer;
  border: 1px solid black;
  padding: 0.5rem;
  user-select: none;
  width: 120px;
  border-radius: 6px;
  background-color: #eee;
}

.enemigo {
  background-color: #fdd;
}

.seleccionado {
  border: 3px solid gold;
}
</style>
