import type { Pet } from '../entities/Pet';
// export type NewPetData = Omit<Pet, 'id' | 'createdAt' | 'updatedAt' | 'isActive'>;
export interface IPetRepository {
  getAll(): Promise<Pet[]>;
  getById(id: string): Promise<Pet | null>;
  save(pet: Pet): Promise<Pet>;
}
