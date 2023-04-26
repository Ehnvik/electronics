import axios from "axios";
import { IMobilesData } from "../../models/mobiles/IMobilesData";
import { IMobileData } from "../../models/mobiles/IMobileData";
import dotenv from "dotenv";
import { IMobile } from "../../models/mobiles/IMobile";
dotenv.config();

const BASE_URL = process.env.BASE_URL;

export const getMobiles = async () => {
  let response = await axios.get<IMobilesData>(`${BASE_URL}/mobiles`);
  return response.data.data;
};

export const getMobileById = async (id: number) => {
  try {
    let response = await axios.get<IMobileData>(`${BASE_URL}/mobiles/${id}`);
    return response.data.data;
  } catch (error: any) {
    if (error.response && error.response.status === 404) {
      return null;
    } else {
      throw error;
    }
  }
};

export const updateMobileById = async (
  id: number,
  updatedComputer: IMobile
) => {
  try {
    const response = await axios.put<IMobile>(
      `${BASE_URL}/mobiles/${id}`,
      updatedComputer
    );
    return response.data;
  } catch (error: any) {
    throw new Error(`Failed to update mobile with id ${id}: ${error.message}`);
  }
};

export const createMobile = async (newMobile: IMobile) => {
  try {
    let response = await axios.post<IMobile>(`${BASE_URL}/mobiles`, newMobile);
    return response.data;
  } catch (error: any) {
    throw new Error(`Failed to create new mobile: ${error.message}`);
  }
};

export const deleteMobileById = async (id: number) => {
  try {
    let response = await axios.delete(`${BASE_URL}/mobiles/${id}`);
    return response.status;
  } catch (error: any) {
    throw new Error(`Failed to delete mobile with id: ${id}`);
  }
};
