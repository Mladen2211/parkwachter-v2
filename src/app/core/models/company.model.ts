import { Parking } from './parking.model';

export interface Company {
  companyId: number;
  companyName: string;
  address?: string;
  zipCode?: string;
  city?: string;
  parkings?: Parking[];      // Relation to Parking (one-to-many)
}
