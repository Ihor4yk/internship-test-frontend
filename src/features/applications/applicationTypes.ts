export interface ApplicationRequest {
  name: string;
  email: string;
  message: string;
  image?: File | null;
}

export interface ApplicationState {
  loading: boolean;
  error: string | null;
  success: boolean;
}
