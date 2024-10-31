import { Company } from './company.model';

export interface Whitelist {
  id: number;
  licensePlate: string;
  companyId: number;
  company?: Company;  // Relation to Company
}
