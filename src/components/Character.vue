<template>
  <div
    class="character"
    :class="{ enemigo: player.enemy, seleccionado: isSelected }"
  >
    <div class="sprite" :style="{ backgroundImage: backgroundUrl }"></div>
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
const backgroundUrl2 = computed(() => props.player.classType.url);
const backgroundUrl3 = `"${props.player.classType.url}"`;

const color = 'red';

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
$image-width: 512px;
$num-steps: 4;
/* $url: v-bind(backgroundUrl); */

.sprite {
  /*   background-image: $url; */

  element.style {
    background-image: url(../assets/knight/alt/Knight_1/Idle.png);
  }
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
  background-color: red;
  transform: scaleX(-1);
}

.seleccionado {
  border: 4px solid yellow;
}
</style>
