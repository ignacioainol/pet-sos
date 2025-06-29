<template>
  <q-layout view="hHh lpR lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <div class="absolute-center">
            <q-icon name="pets" />
            Find Pet
          </div></q-toolbar-title
        >
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Nav </q-item-label>

        <NavLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NavLink, { type NavLinkProps } from 'src/presentation/components/NavLink.vue';

const linksList: NavLinkProps[] = [
  {
    title: 'Encuentra tu mascota',
    caption: 'Mascotas encontradas',
    icon: 'explore',
    link: '/',
  },
  {
    title: 'Reporta tu mascota',
    caption: 'Mascotas perdidas',
    icon: 'pets',
    link: '/report-pet/new',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
