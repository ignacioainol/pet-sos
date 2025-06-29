// This interfaces Pet entity represents a pet that can be reported as lost or found.
export interface Pet {
  id: string;
  name: string;
  species: 'dog' | 'cat' | 'other';
  status: 'lost' | 'found';
  location: string;
  description: string;
  imageUrl: string;
  reportedAt: Date;
  reporBtedBy: {
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
