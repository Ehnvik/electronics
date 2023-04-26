import axios from "axios";
import { ITelevisionsData } from "../../models/televisions/ITelevisionsData";
import { ITelevisionData } from "../../models/televisions/ITelevisionData";
import dotenv from "dotenv";
import { ITelevision } from "../../models/televisions/ITelevision";
dotenv.config();

const BASE_URL = process.env.BASE_URL;

export const getTelevisions = async () => {
  let response = await axios.get<ITelevisionsData>(`${BASE_URL}/televisions`);
  return response.data.data;
};

export const getTelevisionById = async (id: number) => {
  try {
    let response = await axios.get<ITelevisionData>(
      `${BASE_URL}/televisions/${id}`
    );
    return response.data.data;
  } catch (error: any) {
    if (error.response && error.response.status === 404) {
      return null;
    } else {
      throw error;
    }
  }
};

export const updateTelevisionById = async (
  id: number,
  updatedTelevision: ITelevision
) => {
  try {
    const response = await axios.put<ITelevision>(
      `${BASE_URL}/televisions/${id}`,
      updatedTelevision
    );
    return response.data;
  } catch (error: any) {
    throw new Error(
      `Failed to update television with id ${id}: ${error.message}`
    );
  }
};

export const createTelevision = async (newTelevision: ITelevision) => {
  try {
    let response = await axios.post<ITelevision>(
      `${BASE_URL}/televisions`,
      newTelevision
    );
    return response.data;
  } catch (error: any) {
    throw new Error(`Failed to create new television: ${error.message}`);
  }
};

export const deleteTelevisionById = async (id: number) => {
  try {
    let response = await axios.delete(`${BASE_URL}/televisions/${id}`);
    return response.status;
  } catch (error: any) {
    throw new Error(`Failed to delete television with id: ${id}`);
  }
};
