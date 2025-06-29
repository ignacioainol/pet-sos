<template>
  <!-- Contenedor principal que ocupa toda la altura de la pantalla -->
  <div class="pet-feed-card">
    <!-- Sección del carrusel de imágenes (parte superior) -->
    <div class="image-section">
      <q-carousel
        v-model="slide"
        animated
        arrows
        navigation
        infinite
        height="100%"
        class="full-height-carousel"
      >
        <q-carousel-slide
          v-for="(imgUrl, index) in pet.imageUrls"
          :key="index"
          :name="index"
          :img-src="imgUrl"
          class="carousel-slide"
        />
      </q-carousel>
    </div>

    <!-- Sección de detalles de la mascota (parte inferior) -->
    <div class="details-section">
      <q-card flat class="details-card">
        <q-card-section class="q-pb-sm">
          <div class="text-h4 q-mb-xs text-weight-bold">{{ pet.name }}</div>

          <div class="row items-center q-gutter-sm text-h6 text-grey-8 q-mb-sm">
            <q-icon name="pets" size="md" />
            <span class="text-capitalize">{{ pet.species }}</span>
            <q-icon :name="pet.genre === 'male' ? 'male' : 'female'" size="md" />
            <span class="text-capitalize">{{ pet.genre }}</span>
          </div>

          <div class="row items-center q-gutter-sm text-subtitle1">
            <q-icon name="location_on" size="md" color="primary" />
            <span class="text-weight-medium">{{ pet.location }}</span>
            <q-btn flat round dense icon="map" color="primary" size="md" @click="showLocation" />
          </div>
        </q-card-section>

        <q-separator />

        <q-card-section class="q-pt-sm">
          <div class="text-caption text-grey-6 q-mb-xs">Reported by:</div>
          <div class="text-h6 text-weight-medium q-mb-sm">{{ pet.reportedBy.name }}</div>
          <q-btn
            unelevated
            color="primary"
            label="Contact"
            icon="contact_phone"
            @click="showContactInfo"
            class="full-width"
            size="lg"
          />
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import type { Pet } from '../../domain/entities/Pet';

interface Props {
  pet: Pet;
}

const props = defineProps<Props>();
const $q = useQuasar();

const slide = ref(0); // Para controlar el slide actual del carrusel

const showLocation = () => {
  // En una app real, abriría Google Maps o similar
  $q.dialog({
    title: 'Location',
    message: `The pet was found at: ${props.pet.location}.`,
  });
};

const showContactInfo = () => {
  const contact = props.pet.reportedBy.contactInfo;
  $q.dialog({
    title: 'Contact Information',
    message: `You can contact ${props.pet.reportedBy.name} via:\n\nEmail: ${contact.email}\nPhone: ${contact.phone}`,
    html: true, // para permitir saltos de línea
  });
};
</script>

<style scoped lang="scss">
.pet-feed-card {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: white;
}

.image-section {
  flex: 1;
  min-height: 60%;
  position: relative;
}

.full-height-carousel {
  height: 100% !important;

  :deep(.q-carousel__slide) {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  :deep(.q-carousel__navigation) {
    bottom: 20px;
  }

  :deep(.q-carousel__prev-arrow),
  :deep(.q-carousel__next-arrow) {
    background: rgba(0, 0, 0, 0.3);
    color: white;
    border-radius: 50%;
  }
}

.details-section {
  flex: 0 0 auto;
  max-height: 40%;
  overflow-y: auto;
  background: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-top: -20px;
  position: relative;
  z-index: 1;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);
}

.details-card {
  background: transparent;
  padding: 16px;
}

@media (max-width: 600px) {
  .image-section {
    min-height: 50%;
  }

  .details-section {
    max-height: 50%;
  }
}
</style>
