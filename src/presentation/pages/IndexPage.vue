<template>
  <!-- Quasar nos da clases para altura y anchura del viewport. 'fit' es una opción -->
  <!-- 'scroll-snap-type' habilita el snapping. 'y mandatory' fuerza el snap en el eje Y. -->
  <q-page class="scroll-snap-container bg-grey-2">
    <div v-if="store.isLoading" class="fullscreen flex flex-center">
      <q-spinner-dots color="primary" size="50px" />
    </div>

    <div v-else-if="store.error" class="fullscreen text-negative text-center flex flex-center">
      <div>
        <p>{{ store.error }}</p>
        <q-btn label="Retry" @click="fetch" color="primary" />
      </div>
    </div>

    <div
      v-else-if="store.pets.length === 0"
      class="fullscreen flex flex-center text-h5 text-grey-7"
    >
      No pets found. Come back later!
    </div>

    <!-- Debug info -->
    <!-- <div
      v-if="!store.isLoading && !store.error"
      class="debug-info fixed-top bg-accent text-white q-pa-sm"
      style="z-index: 9999"
    >
      <p>Pets loaded: {{ store.pets.length }}</p>
    </div> -->

    <!-- Cada PetFeedCard será un 'snap child' -->
    <div v-if="!store.isLoading && !store.error && store.pets.length > 0">
      <PetFeedCard v-for="pet in store.pets" :key="pet.id" :pet="pet" class="scroll-snap-child" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { usePetListStore } from '../features/list-pets/store/usePetListStore';
import PetFeedCard from '../components/PetFeedCard.vue';

const store = usePetListStore();

const fetch = () => {
  void store.fetchPets();
};

onMounted(() => {
  if (store.pets.length === 0) {
    fetch();
  }
});
</script>

<style lang="scss">
.scroll-snap-container {
  // Ocupa toda la altura de la página y permite scroll vertical
  height: 100vh;
  overflow-y: auto;
  // Propiedades mágicas para el scroll snap
  scroll-snap-type: y mandatory;
}

.scroll-snap-child {
  // Cada hijo debe ocupar toda la altura del contenedor para un snap perfecto
  height: 100vh;
  // Alinea el snap al inicio del elemento
  scroll-snap-align: start;
}
</style>
