import { Company } from './company.model';
import { UserProfile } from './user.model';

export interface CompanySettings {
  id: number;
  companyId: number;
  setting: string;
  updatedByUserId: number;
  updatedDate: Date;
  company?: Company;  // Relation to Company
  updatedByUser?: UserProfile;  // Relation to UserProfile
}
