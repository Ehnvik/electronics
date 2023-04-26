import { Request, Response } from "express";
import {
  createComputer,
  deleteComputerById,
  getComputerById,
  getComputers,
  updateComputerById,
} from "../services/computer/computerService";
import { IComputer } from "../models/computers/IComputer";

export const getComputersController = async (req: Request, res: Response) => {
  try {
    let computers = await getComputers();
    if (computers.length === 0) {
      res.status(404).send("No computers found");
    } else {
      res.json(computers);
    }
  } catch (error) {
    res.status(500).send("Error getting computers");
  }
};

export const getComputerByIdController = async (
  req: Request,
  res: Response
) => {
  const id = +req.params.id;

  try {
    let computer = await getComputerById(id);
    if (computer === null) {
      res.status(404).send("No computer found");
    } else {
      res.send(computer);
    }
  } catch (error) {
    res.status(500).send("Error getting computer");
  }
};

export const updateComputerByIdController = async (
  req: Request,
  res: Response
) => {
  const id = +req.params.id;
  const updatedComputer = req.body as IComputer;
  try {
    await updateComputerById(id, updatedComputer);
    res.json(updatedComputer);
  } catch (error) {
    res.status(404).json({ message: `Computer with id ${id} not found` });
  }
};

export const createComputerController = async (req: Request, res: Response) => {
  const newComputer = req.body as IComputer;
  try {
    let computer = await createComputer(newComputer);
    res.status(201).send(computer);
  } catch (error: any) {
    res.status(500).send("Failed to create new computer" + error);
  }
};

export const deleteComputerByIdController = async (
  req: Request,
  res: Response
) => {
  const id = +req.params.id;
  try {
    await deleteComputerById(id);
    res.status(200).send(`Computer with id ${id} deleted successfully`);
  } catch (error: any) {
    res.status(404).json({ message: `Computer with id ${id} was not found` });
  }
};
