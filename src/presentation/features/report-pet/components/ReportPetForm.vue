<template>
  <q-form @submit.prevent="onSubmit">
    <q-card flat bordered>
      <q-card-section>
        <div class="text-h6">Detalles de la Mascota</div>
      </q-card-section>

      <q-card-section class="q-gutter-md">
        <q-input
          v-model="store.draft.name"
          label="Nombre de la mascota"
          filled
          lazy-rules
          :rules="[(val) => !!val || 'El nombre es requerido']"
        />
        <q-select v-model="store.draft.status" :options="['found', 'lost']" label="Estado" filled />
        <q-select
          v-model="store.draft.species"
          :options="['dog', 'cat', 'other']"
          label="Especie"
          filled
        />
        <q-select v-model="store.draft.genre" :options="['male', 'female']" label="Género" filled />
        <q-input
          v-model="store.draft.location"
          label="Última ubicación vista"
          filled
          hint="Ej: Parque Central, cerca de la fuente"
        />
        <q-input
          v-model="store.draft.description"
          type="textarea"
          label="Descripción"
          filled
          hint="Rasgos, comportamiento, collar, etc."
        />
      </q-card-section>

      <q-separator />

      <q-card-section>
        <div class="text-h6">Tus Datos de Contacto</div>
      </q-card-section>
      <q-card-section class="q-gutter-md">
        <q-input v-model="store.draft.reportedBy.name" label="Tu Nombre" filled />
        <q-input
          v-model="store.draft.reportedBy.contactInfo.email"
          type="email"
          label="Tu Email"
          filled
        />
        <q-input
          v-model="store.draft.reportedBy.contactInfo.phone"
          type="tel"
          label="Tu Teléfono"
          filled
        />
      </q-card-section>

      <q-card-actions align="right" class="q-pa-md">
        <q-btn label="Limpiar" type="button" @click="store.resetForm" flat />
        <q-btn label="Reportar Mascota" type="submit" color="primary" :loading="store.isLoading" />
      </q-card-actions>
    </q-card>

    <q-dialog :model-value="store.isSuccess" @hide="store.isSuccess = false">
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="check_circle" color="positive" text-color="white" />
          <span class="q-ml-sm">¡Mascota reportada con éxito!</span>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-form>
</template>

<script setup lang="ts">
import { useReportPetStore } from 'src/presentation/features/report-pet/store/useReportPetStore';

const store = useReportPetStore();

const onSubmit = () => {
  void store.submitReport();
};
</script>
