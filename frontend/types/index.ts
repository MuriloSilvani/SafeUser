export interface UserProfile {
  id: number;
  name: string;
  email: string;
  cpf?: string;
  phone?: string;
  createdAt: Date;
  updatedAt: Date;
}
