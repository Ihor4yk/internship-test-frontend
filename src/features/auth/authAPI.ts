import { axiosInstance, type AxiosError } from '../../api/axiosInstance';
import type { AuthResponse, LoginRequest, RegisterRequest } from './authTypes';

export class AuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AuthError';
  }
}

export async function loginUser(payload: LoginRequest): Promise<AuthResponse> {
  try {
    const res = await axiosInstance.post<AuthResponse>('/auth/login', payload);
    return res.data;
  } catch (err) {
    const error = err as AxiosError<{ message?: string }>;
    const message = error.response?.data?.message || 'Login failed';
    throw new AuthError(message);
  }
}

export async function registerUser(payload: RegisterRequest): Promise<AuthResponse> {
  try {
    const res = await axiosInstance.post<AuthResponse>('/auth/register', payload);
    return res.data;
  } catch (err) {
    const error = err as AxiosError<{ message?: string }>;
    const message = error.response?.data?.message || 'Registration failed';
    throw new AuthError(message);
  }
}
