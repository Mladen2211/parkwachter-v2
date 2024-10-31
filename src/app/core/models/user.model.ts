import { Company } from './company.model';
import { UserRole } from './user-role.model';
import { Parking } from './parking.model';

export interface UserProfile {
  userId: number;
  username: string;
  password: string;
  roleId: number;
  companyId?: number;
  email?: string;
  company?: Company;        // Relation to Company
  role?: UserRole;          // Relation to UserRole
  parkings?: Parking[];     // Relation to Parking (one-to-many)
}
