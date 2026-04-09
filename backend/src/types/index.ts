export interface AuthenticatedRequest {
  user: {
    id: number;
    email: string;
  };
}
