import { IMobile } from "../models/mobiles/IMobile";
import {
  createMobile,
  deleteMobileById,
  getMobileById,
  getMobiles,
  updateMobileById,
} from "../services/mobile/mobileService";
import { Request, Response } from "express";

export const getMobilesController = async (req: Request, res: Response) => {
  try {
    let mobiles = await getMobiles();
    if (mobiles.length === 0) {
      res.status(404).send("No mobiles found");
    } else {
      res.send(mobiles);
    }
  } catch (error) {
    res.status(500).send("Error getting mobiles");
  }
};

export const getMobileByIdController = async (req: Request, res: Response) => {
  const id = +req.params.id;

  try {
    let computer = await getMobileById(id);
    if (computer === null) {
      res.status(404).send("No mobile found");
    } else {
      res.send(computer);
    }
  } catch (error) {
    res.status(500).send("Error getting mobile");
  }
};

export const updateMobileByIdController = async (
  req: Request,
  res: Response
) => {
  const id = +req.params.id;
  const updatedMobile = req.body as IMobile;
  try {
    await updateMobileById(id, updatedMobile);
    res.json(updatedMobile);
  } catch (error) {
    res.status(404).json({ message: `Mobile with id ${id} not found` });
  }
};

export const createMobileController = async (req: Request, res: Response) => {
  const newMobile = req.body as IMobile;
  try {
    let mobile = await createMobile(newMobile);
    res.status(201).send(mobile);
  } catch (error: any) {
    res.status(500).send("Failed to create new computer" + error);
  }
};

export const deleteMobileByIdController = async (
  req: Request,
  res: Response
) => {
  const id = +req.params.id;
  try {
    await deleteMobileById(id);
    res.status(200).send(`Mobile with id ${id} deleted successfully`);
  } catch (error: any) {
    res.status(404).json({ message: `Mobile with id ${id} was not found` });
  }
};
