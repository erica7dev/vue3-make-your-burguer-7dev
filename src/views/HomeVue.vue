<template>
  <div>
    <BannerVue/>
    <div class="main-container">
      <h1>Montar seu cardápio nunca foi tão fácil</h1>
      <BurgerForm/>
    </div>
  </div>
</template>

<script>
import BannerVue from '../components/BannerVue.vue'
import BurgerForm from '@/components/BurgerForm.vue'

export default {
 name: 'HomeVue',
 components: {
   BannerVue,
   BurgerForm
 }
}
</script>