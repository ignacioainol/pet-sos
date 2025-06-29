import type { IPetRepository } from '../../domain/repositories/IPetRepository';
import type { Pet } from '../../domain/entities/Pet';
import type { PetApiResponseDTO } from './PetApiDTO';
import { api } from 'src/boot/axios';

export class AxiosPetRepository implements IPetRepository {
  async getAll(): Promise<Pet[]> {
    // Le decimos a Axios que esperamos un array de DTOs. ¡Cero 'any'!
    const { data } = await api.get<PetApiResponseDTO[]>('/pets');

    // Mapeamos de la estructura de la API (DTO) a la estructura de nuestro dominio (Entity).
    return data.map((apiPet) => this.mapToDomain(apiPet));
  }

  async getById(id: string): Promise<Pet | null> {
    try {
      const { data } = await api.get<PetApiResponseDTO>(`/pets/${id}`);
      return this.mapToDomain(data);
    } catch (error) {
      console.error(`Pet with id ${id} not found`, error);
      return null;
    }
  }

  // El traductor: recibe un DTO y devuelve una Entidad de Dominio.
  // Ahora es totalmente seguro a nivel de tipos.
  private mapToDomain(apiPet: PetApiResponseDTO): Pet {
    return {
      id: apiPet.id,
      name: apiPet.name,
      species: apiPet.species,
      genre: apiPet.genre,
      status: apiPet.status,
      location: apiPet.location,
      description: apiPet.description,
      imageUrl: apiPet.image_url,
      reportedAt: new Date(apiPet.reported_at),
      reportedBy: {
        ...apiPet.reported_by,
        contactInfo: apiPet.reported_by.contact_info,
      },
      isActive: apiPet.is_active,
      createdAt: new Date(apiPet.created_at),
      updatedAt: new Date(apiPet.updated_at),
    };
  }
}
