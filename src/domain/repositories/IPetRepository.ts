import type { Pet } from '../entities/Pet';

export interface IPetRepository {
  getAll(): Promise<Pet[]>;
  getById(id: string): Promise<Pet | null>;
  // Aquí van los otros métodos como: save(pet: Pet): Promise<void>;
}
