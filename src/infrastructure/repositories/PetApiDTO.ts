export interface PetApiResponseDTO {
  id: string;
  name: string;
  species: 'dog' | 'cat' | 'other';
  genre: 'male' | 'female';
  status: 'lost' | 'found';
  location: string;
  description: string;
  image_urls: string[];
  reported_at: string;
  reported_by: {
    id: string;
    name: string;
    contact_info: {
      email: string;
      phone: string;
    };
  };
  is_active: boolean;
  created_at: string;
  updated_at: string;
}
