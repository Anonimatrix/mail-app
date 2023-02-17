import api from "@/config/api";
import axios from "axios";

export const sendMail = async (data) => {
  return await axios.post(`${api.baseUrl}/mail`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
