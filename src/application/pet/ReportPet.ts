// src/application/pet/ReportPet.ts
import type { IPetRepository } from '../../domain/repositories/IPetRepository';
import type { Pet } from '../../domain/entities/Pet';

export class ReportPet {
  constructor(private readonly petRepository: IPetRepository) {}

  async execute(data: Pet): Promise<Pet> {
    // Aquí podrías añadir validaciones de negocio complejas,
    // notificaciones, etc. antes de guardar.
    if (!data.name || data.name.trim() === '') {
      throw new Error('Pet name is required.');
    }
    // ... más validaciones

    const createdPet = await this.petRepository.save(data);
    return createdPet;
  }
}
