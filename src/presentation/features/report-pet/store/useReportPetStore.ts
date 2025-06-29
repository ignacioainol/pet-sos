import { defineStore } from 'pinia';
// import type { IPetRepository } from 'src/domain/repositories/IPetRepository';
import type { Pet } from 'src/domain/entities/Pet';
import dependencies from 'src/boot/dependencies';

// Estado inicial para un nuevo formulario
const getInitialState = (): Pet => ({
  id: '',
  name: '',
  species: 'dog',
  genre: 'male',
  status: 'found',
  location: '',
  description: '',
  imageUrls: [], // Empezamos sin imágenes
  reportedAt: new Date(),
  reportedBy: {
    id: 'temp-user', // Esto sería del usuario autenticado
    name: '',
    contactInfo: { email: '', phone: '' },
  },
  isActive: true,
  createdAt: new Date(),
  updatedAt: new Date(),
});

export const useReportPetStore = defineStore('reportPet', {
  state: () => ({
    draft: getInitialState(),
    isLoading: false,
    error: null as string | null,
    isSuccess: false,
  }),
  actions: {
    async submitReport() {
      this.isLoading = true;
      this.error = null;
      this.isSuccess = false;
      try {
        await dependencies.useCases.reportPet.execute(this.draft);
        this.isSuccess = true;
        // Opcional: navegar a otra página o mostrar un mensaje de éxito
        this.resetForm();
      } catch (e: unknown) {
        if (e instanceof Error) {
          this.error = e.message;
        } else {
          this.error = 'An unknown error occurred.';
        }
      } finally {
        this.isLoading = false;
      }
    },
    resetForm() {
      this.draft = getInitialState();
      this.error = null;
      this.isSuccess = false;
    },
  },
});
