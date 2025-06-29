// This interfaces Pet entity represents a pet that can be reported as lost or found.
export interface Pet {
  id: string;
  name: string;
  species: 'dog' | 'cat' | 'other';
  genre: 'male' | 'female';
  status: 'lost' | 'found';
  location: string;
  description: string;
  imageUrls: string[];
  reportedAt: Date;
  reportedBy: {
    id: string;
    name: string;
    contactInfo: {
      email: string;
      phone: string;
    };
  };
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
