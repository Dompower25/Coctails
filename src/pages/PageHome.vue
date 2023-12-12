<script setup>
import AppLayout from '../components/AppLayout.vue'
import { useRootStore } from '@/stores/root'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const rootStore = useRootStore()
rootStore.getIngredients()

const { ingredients, cocktails } = storeToRefs(rootStore)
const ingredient = ref(null)

function getCocktails() {
  rootStore.getCocktailsByIngredients(ingredient.value)
}
</script>

<template>
  <AppLayout imgUrl="/src/assets/img/Cocktail_home_page_min.jpg">
    <div class="wrapper">
      <div v-if="!ingredient || !cocktails" class="info">
        <div class="title">Choose your drink</div>
        <div class="line"></div>
        <div class="selectWrapper">
          <el-select
            v-model="ingredient"
            class="elSelect"
            placeholder="Choose main ingredient"
            size="large"
            @change="getCocktails"
          >
            <el-option
              v-for="item in ingredients"
              :key="item.strIngredient1"
              :label="item.strIngredient1"
              :value="item.strIngredient1"
            />
          </el-select>
        </div>
        <div class="text">
          Try our delicious cocktail recipes for every occasion. Find delicious cocktail recipes by
          ingredient through our cocktail generator.
        </div>
        <img src="/src/assets/img/cocktails_preview.jpg" alt="cocktails_preview" class="img" />
      </div>
      <div v-else class="info">
        <div class="title">Cocktails with {{ ingredient }}</div>
        <div class="line"></div>
      </div>
    </div>
  </AppLayout>
</template>

<style lang="scss" scoped>
@import '../assets/styles/main';
@import '../assets/styles/variables.scss';

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .info {
    padding: 80px 0;
    text-align: center;

    .selectWrapper {
      padding-top: 50px;

      .elSelect {
        width: 220px;
      }
    }
    .text {
      max-width: 516px;
      margin: 0 auto;
      padding-top: 50px;
      letter-spacing: 0.1em;
      line-height: 36px;
      color: $textMuted;
    }
    .img {
      padding-top: 60px;
    }
  }
}
</style>
