<template>
  <q-page class="q-pa-md">
    <div v-if="store.isLoading" class="flex flex-center">
      <q-spinner-dots color="primary" size="40px" />
    </div>

    <div v-else-if="store.error" class="text-negative text-center">
      <p>{{ store.error }}</p>
      <q-btn label="Retry" @click="store.fetchPets" color="primary" />
    </div>

    <!-- Usamos un componente dedicado para la lista -->
    <PetListComponent v-else :pets="store.pets" />
  </q-page>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { usePetListStore } from 'src/presentation/features/list-pets/store/usePetListStore';
import PetListComponent from 'src/presentation/features/list-pets/components/PetListComponent.vue';

const store = usePetListStore();

// Cuando el componente se monta, pedimos a la store que cargue los datos.
onMounted(() => {
  // Evitamos cargar los datos si ya los tenemos
  if (store.pets.length === 0) {
    void store.fetchPets();
  }
});
</script>
