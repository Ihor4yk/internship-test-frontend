import { axiosInstance } from "../../api/axiosInstance";
import type { ApplicationRequest } from "./applicationTypes";

export async function createApplicationAPI(data: ApplicationRequest) {
  const formData = new FormData();

  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("message", data.message);

  if (data.image) {
    formData.append("image", data.image);
  }

  const response = await axiosInstance.post("/applications", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
}
