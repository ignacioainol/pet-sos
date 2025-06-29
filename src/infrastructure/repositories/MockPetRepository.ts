import type { IPetRepository } from '../../domain/repositories/IPetRepository';
import type { Pet } from '../../domain/entities/Pet';

const mockPets: Pet[] = [
  {
    id: '1',
    name: 'Firulais',
    species: 'dog',
    genre: 'male',
    status: 'found',
    location: 'Parque Central, Ciudad Gótica',
    description:
      'Encontrado cerca de la fuente principal. Es muy amigable y parece bien cuidado. Llevaba un collar rojo sin placa.',
    imageUrls: [
      'https://images.unsplash.com/photo-1529831129093-0fa4866281ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFicmFkb3J8ZW58MHx8MHx8fDA%3D',
      'https://placedog.net/500/500?id=3',
      'https://placedog.net/500/500?id=2',
    ],
    reportedAt: new Date('2024-05-20T10:00:00Z'),
    reportedBy: {
      id: 'user1',
      name: 'Juan Pérez',
      contactInfo: { email: 'juan.perez@example.com', phone: '+123456789' },
    },
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    name: 'Misha',
    species: 'cat',
    genre: 'female',
    status: 'found',
    location: 'Calle Falsa 123, Springfield',
    description:
      'Estaba maullando en mi tejado. Es un poco tímida pero se deja acariciar. De color gris con manchas blancas.',
    imageUrls: [
      'https://images.unsplash.com/photo-1503431128871-cd250803fa41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2F0byUyMG5lZ3JvfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1649171818128-0a8f390e990c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhdG8lMjBuZWdyb3xlbnwwfHwwfHx8MA%3D%3D',
      'https://images.unsplash.com/photo-1686762843717-dec31bdf210f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdhdG8lMjBuZWdyb3xlbnwwfHwwfHx8MA%3D%3D',
    ],
    reportedAt: new Date('2024-05-19T15:30:00Z'),
    reportedBy: {
      id: 'user2',
      name: 'Ana Gómez',
      contactInfo: { email: 'ana.gomez@example.com', phone: '+987654321' },
    },
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '3',
    name: 'Lula',
    species: 'dog',
    genre: 'female',
    status: 'found',
    location: 'Calle Verdadera 123, Concepción',
    description:
      'Estaba maullando en mi tejado. Es un poco tímida pero se deja acariciar. De color gris con manchas blancas.',
    imageUrls: [
      'https://plus.unsplash.com/premium_photo-1686523494577-111ec2c50e61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9saWNlJTIwZG9nfGVufDB8fDB8fHww',
      'https://plus.unsplash.com/premium_photo-1686523494549-deba58e35e95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9saWNlJTIwZG9nfGVufDB8fDB8fHww',
      'https://plus.unsplash.com/premium_photo-1686523495733-dd7119643ea7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBvbGljZSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D',
    ],
    reportedAt: new Date('2024-05-19T15:30:00Z'),
    reportedBy: {
      id: 'user3',
      name: 'Rodrigo Gómez',
      contactInfo: { email: 'rodrigo.gomez@example.com', phone: '+987654331' },
    },
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export class MockPetRepository implements IPetRepository {
  async getAll(): Promise<Pet[]> {
    // Simulamos una llamada a la red con un pequeño retardo
    return new Promise((resolve) => {
      setTimeout(() => {
        // Filtramos solo las mascotas encontradas y activas
        const foundPets = mockPets.filter((p) => p.status === 'found' && p.isActive);
        resolve(foundPets);
      }, 500); // 500ms de delay
    });
  }

  async getById(id: string): Promise<Pet | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const pet = mockPets.find((p) => p.id === id) || null;
        resolve(pet);
      }, 300);
    });
  }
  async save(petData: Pet): Promise<Pet> {
    console.log('Guardando nueva mascota:', petData);
    return new Promise((resolve) => {
      setTimeout(() => {
        const newPet: Pet = {
          ...petData,
          id: String(Math.floor(Math.random() * 10000)), // ID aleatorio
          isActive: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        mockPets.push(newPet);
        console.log('Mascota guardada:', newPet);
        resolve(newPet);
      }, 700); // Simular delay de guardado
    });
  }
}
