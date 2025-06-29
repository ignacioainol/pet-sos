// import { AxiosPetRepository } from 'src/infrastructure/repositories/AxiosPetRepository';
import { MockPetRepository } from '../infrastructure/repositories/MockPetRepository';
import { ListPets } from '../application/pet/ListPets';
import { ReportPet } from '../application/pet/ReportPet';

// 1. Creamos una instancia de nuestro repositorio concreto
// const petRepository = new AxiosPetRepository();
const petRepository = new MockPetRepository();

// 2. Creamos instancias de nuestros casos de uso, inyectando las dependencias
const listPetsUseCase = new ListPets(petRepository);
const reportPetUseCase = new ReportPet(petRepository);

// 3. Exportamos un contenedor de dependencias simple
const dependencies = {
  useCases: {
    listPets: listPetsUseCase,
    reportPet: reportPetUseCase,
  },
};

export type AppDependencies = typeof dependencies;

export default dependencies;
