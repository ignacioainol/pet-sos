import type { IPetRepository } from '../../domain/repositories/IPetRepository';
import type { Pet } from '../../domain/entities/Pet';

// Este es el Caso de Uso. Su única responsabilidad es listar las mascotas.
export class ListPets {
  // Depende de la ABSTRACCIÓN, no de la implementación.
  // Esto es Inyección de Dependencias.
  constructor(private readonly petRepository: IPetRepository) {}

  async execute(): Promise<Pet[]> {
    // Llama al método del repositorio y podría añadir lógica extra
    // como logging, caching, etc.
    const pets = await this.petRepository.getAll();

    // Podríamos ordenar las mascotas por fecha aquí, por ejemplo.
    return pets.sort((a, b) => b.reportedAt.getTime() - a.reportedAt.getTime());
  }
}
