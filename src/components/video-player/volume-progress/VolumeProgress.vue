<template>
  <div class="volume-progress">
    <i class="volume-progress-bar-arrow"></i>
    <VerticalProgress
      class="progress"
      :current="progress * 100 + '%'"
      :range="'.volume-progress'"
      @progressChange="progressChange"
    />
  </div>
</template>

<script lang="ts" setup>
import VerticalProgress from '@/components/vertical-progress/VerticalProgress.vue';

defineProps({
  progress: {
    type: Number,
    default: 0
  }
});
const emits = defineEmits(['progressChange']);

function progressChange(value: number): void {
  emits('progressChange', value);
}
</script>

<style lang="less" scoped>
@import url('./volume-progress.less');
</style>
