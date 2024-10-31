import { UserProfile } from './user.model';
import { Company } from './company.model';

export interface Parking {
  id: number;
  userId?: number;  // Nullable after ALTER TABLE statement
  companyId: number;
  licensePlate: string;
  model?: string;
  make?: string;
  createdDate: Date;
  user?: UserProfile;  // Relation to UserProfile
  company?: Company;   // Relation to Company
}
