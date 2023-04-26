import axios from "axios";
import { IComputersData } from "../../models/computers/IComputersData";
import dotenv from "dotenv";
import { IComputer } from "../../models/computers/IComputer";
import { IComputerData } from "../../models/computers/IComputerData";

dotenv.config();

const BASE_URL = process.env.BASE_URL;

export const getComputers = async () => {
  let response = await axios.get<IComputersData>(`${BASE_URL}/computers`);
  return response.data.data;
};

export const getComputerById = async (id: number) => {
  try {
    let response = await axios.get<IComputerData>(
      `${BASE_URL}/computers/${id}`
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

export const updateComputerById = async (
  id: number,
  updatedComputer: IComputer
) => {
  try {
    const response = await axios.put<IComputer>(
      `${BASE_URL}/computers/${id}`,
      updatedComputer
    );
    return response.data;
  } catch (error: any) {
    throw new Error(
      `Failed to update computer with id ${id}: ${error.message}`
    );
  }
};

export const createComputer = async (newComputer: IComputer) => {
  try {
    let response = await axios.post<IComputer>(
      `${BASE_URL}/computers`,
      newComputer
    );
    return response.data;
  } catch (error: any) {
    throw new Error(`Failed to create new computer: ${error.message}`);
  }
};

export const deleteComputerById = async (id: number) => {
  try {
    let response = await axios.delete(`${BASE_URL}/computers/${id}`);
    return response.status;
  } catch (error: any) {
    throw new Error(`Failed to delete computer with id: ${id}`);
  }
};
