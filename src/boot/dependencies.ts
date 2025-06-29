import { AxiosPetRepository } from 'src/infrastructure/repositories/AxiosPetRepository';
import { ListPets } from 'src/application/pet/ListPets';

// 1. Creamos una instancia de nuestro repositorio concreto
const petRepository = new AxiosPetRepository();

// 2. Creamos instancias de nuestros casos de uso, inyectando las dependencias
const listPetsUseCase = new ListPets(petRepository);
// const reportPetUseCase = new ReportPet(petRepository); // <-- cuando lo creemos

// 3. Exportamos un contenedor de dependencias simple
const dependencies = {
  useCases: {
    listPets: listPetsUseCase,
    // reportPet: reportPetUseCase,
  },
};

export type AppDependencies = typeof dependencies;

export default dependencies;
