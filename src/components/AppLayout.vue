<!-- eslint-disable no-unused-vars -->
<script setup>
import { Back } from '@element-plus/icons-vue'

const props = defineProps({
  imgUrl: {
    type: String,
    required: true
  },
  backFunc: {
    type: Function,
    required: true
  },
  isBackButtonVisible: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div class="root">
    <div :style="`background-image: url(${imgUrl})`" class="img"></div>
    <div class="main">
      <div class="btns">
        <el-button
          v-if="isBackButtonVisible"
          type="primary"
          :icon="Back"
          circle
          class="back"
          @click="backFunc"
        />
        <el-button class="main_btn">Get random cocktail</el-button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';
@import '../assets/styles/variables.scss';

.root {
  display: flex;
  min-height: 100vh;
  background-color: $background;

  .img {
    width: 50%;

    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
  }
  .main {
    position: relative;
    width: 50%;
    padding: 32px 40px;
    .btns {
      .back {
        background-color: transparent;
        border-color: #fff;
        &:hover {
          border-color: $accent;
          color: $accent;
        }
      }

      .main_btn {
        position: absolute;
        top: 32px;
        right: 40px;
        font-size: 16px;
        font-family: 'Raleway', 'Arial', sans-serif;
        border-color: $accent;
        background-color: $accent;
        color: $text;

        &:hover,
        &:active {
          background-color: darken($color: $accent, $amount: 10%);
          border-color: darken($color: $accent, $amount: 10%);
        }
      }
    }
  }
}
</style>
