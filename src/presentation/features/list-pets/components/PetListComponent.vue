<template>
  <div class="row q-col-gutter-md">
    <div v-if="pets.length === 0" class="col-12 text-center text-grey">No pets found.</div>
    <div v-for="pet in pets" :key="pet.id" class="col-12 col-sm-6 col-md-4 col-lg-3">
      <PetCard :pet="pet" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Pet } from 'src/domain/entities/Pet';
import PetCard from 'src/presentation/components/PetCard.vue';

interface Props {
  pets: Pet[];
}

defineProps<Props>();
</script>
