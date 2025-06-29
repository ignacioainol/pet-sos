<template>
  <q-card>
    <q-img :src="pet.imageUrls[0]" :ratio="1" />
    <q-card-section>
      <div class="text-h6">
        {{ pet.name }}
        <q-badge :color="pet.status === 'lost' ? 'negative' : 'positive'">{{ pet.status }}</q-badge>
      </div>
      <div class="text-subtitle2">{{ pet.location }}</div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      {{ pet.description }}
    </q-card-section>
    <q-card-actions align="right">
      <q-btn flat dense color="primary" label="View Details" />
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
import type { Pet } from '../../domain/entities/Pet';

interface Props {
  pet: Pet;
}

defineProps<Props>();
</script>
