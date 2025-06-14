<template>
  <div
    class="character"
    :class="{ enemigo: player.enemy, seleccionado: isSelected }"
  >
    <div class="sprite"></div>
  </div>
  <!-- <div v-if="player.enemy">Enemigo</div> -->
</template>

<script setup lang="ts">
import { defineProps, computed, PropType } from 'vue';
import { Player } from '../models/models';

const props = defineProps({
  player: {
    type: Player,
    required: true,
  },
  selectedPlayerId: {
    type: Number as PropType<number | null>,
    default: null,
  },
});

const isSelected = computed(() => {
  return props.selectedPlayerId === props.player.id;
});

const backgroundUrl = computed(() => `url('${props.player.classType.url}')`);
const ancho = computed(() => `${props.player.classType.ancho}px`);

const numSteps = computed(() => props.player.classType.numSteps);
const color = computed(() => 'red');

const attack = () => {
  alert('Attack');
};
</script>

<style lang="scss">
.character {
  border: 1px solid black;
}
$width: 128px;
$height: 128px;
/* $image-width: #{'500px'}; */
// Esto no va
$image-width: #{(v-bind(ancho))};

$url: v-bind(backgroundUrl);
$num-steps: v-bind(numSteps);
$color: v-bind(color);

.sprite {
  background-image: $url;
  background-position: 0 0;
  background-size: $image-width $height;
  width: $width;
  height: $height;
  animation-name: sprite-animation;
  animation-duration: 1s;
  animation-timing-function: steps($num-steps);
  animation-iteration-count: infinite;
}

@keyframes sprite-animation {
  from {
    background-position-x: 0;
  }
  to {
    background-position-x: -$image-width;
  }
}

.character {
  box-sizing: border-box;
}

.enemigo {
  background-color: $color;
  transform: scaleX(-1);
}

.seleccionado {
  border: 4px solid yellow;
}
</style>
