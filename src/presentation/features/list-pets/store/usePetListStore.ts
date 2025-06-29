import { defineStore } from 'pinia';
import type { Pet } from '../../../../domain/entities/Pet';
import dependencies from '../../../../boot/dependencies'; // Importamos nuestras dependencias

interface PetListState {
  pets: Pet[];
  isLoading: boolean;
  error: string | null;
}

export const usePetListStore = defineStore('petList', {
  state: (): PetListState => ({
    pets: [],
    isLoading: false,
    error: null,
  }),

  actions: {
    async fetchPets() {
      this.isLoading = true;
      this.error = null;
      try {
        // La store llama al CASO DE USO, no directamente al repositorio.
        const pets = await dependencies.useCases.listPets.execute();
        this.pets = pets;
      } catch (e) {
        this.error = 'Failed to fetch pets.';
        console.error(e);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
