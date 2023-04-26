import { ITelevision } from "../models/televisions/ITelevision";
import {
  createTelevision,
  deleteTelevisionById,
  getTelevisionById,
  getTelevisions,
  updateTelevisionById,
} from "../services/television/televisionService";
import { Request, Response } from "express";

export const getTelevisionsController = async (req: Request, res: Response) => {
  try {
    let televisions = await getTelevisions();
    if (televisions.length === 0) {
      res.status(404).send("No televisions found");
    } else {
      res.send(televisions);
    }
  } catch (error) {
    res.status(500).send("Error getting televisions");
  }
};

export const getTelevisionByIdController = async (
  req: Request,
  res: Response
) => {
  const id = +req.params.id;

  try {
    let television = await getTelevisionById(id);
    if (television === null) {
      res.status(404).send("No television found");
    } else {
      res.send(television);
    }
  } catch (error) {
    res.status(500).send("Error getting television");
  }
};

export const updateTelevisionByIdController = async (
  req: Request,
  res: Response
) => {
  const id = +req.params.id;
  const updatedTelevision = req.body as ITelevision;
  try {
    await updateTelevisionById(id, updatedTelevision);
    res.json(updatedTelevision);
  } catch (error) {
    res.status(404).json({ message: `Television with id ${id} not found` });
  }
};

export const createTelevisionController = async (
  req: Request,
  res: Response
) => {
  const newTelevision = req.body as ITelevision;
  try {
    let television = await createTelevision(newTelevision);
    res.status(201).send(television);
  } catch (error: any) {
    res.status(500).send("Failed to create new television" + error);
  }
};

export const deleteTelevisionByIdController = async (
  req: Request,
  res: Response
) => {
  const id = +req.params.id;
  try {
    await deleteTelevisionById(id);
    res.status(200).send(`Television with id ${id} deleted successfully`);
  } catch (error: any) {
    res.status(404).json({ message: `Television with id ${id} was not found` });
  }
};
