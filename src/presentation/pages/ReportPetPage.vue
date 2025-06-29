<template>
  <q-page padding>
    <div class="q-mx-auto" style="max-width: 600px">
      <h4 class="q-my-md">Reportar una Mascota</h4>
      <ReportPetForm />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import ReportPetForm from 'src/presentation/features/report-pet/components/ReportPetForm.vue';
</script>
