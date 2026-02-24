import { axiosInstance, type AxiosError } from "../../api/axiosInstance";
import type { Deal } from "./dealTypes";

export class DealsError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DealsError";
  }
}

export async function fetchDeals(): Promise<Deal[]> {
  try {
    const res = await axiosInstance.get<Deal[]>("/deals");
    return res.data;
  } catch (err) {
    const error = err as AxiosError<{ message?: string }>;
    const message = error.response?.data?.message || "Failed to fetch deals";
    throw new DealsError(message);
  }
}
