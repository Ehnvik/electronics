import { Request, Response } from "express";
import {
  createAudioDevice,
  deleteAudioDeviceById,
  getAudioDeviceById,
  getAudioDevices,
  updateAudioDeviceById,
} from "../services/audioDevice/audioDeviceService";
import { IAudioDevice } from "../models/audio_devices/IAudioDevice";

export const getAudioDevicesController = async (
  req: Request,
  res: Response
) => {
  try {
    let audioDevices = await getAudioDevices();
    if (audioDevices.length === 0) {
      res.status(404).send("No audio devices found");
    } else {
      res.json(audioDevices);
    }
  } catch (error) {
    res.status(500).send("Error getting audio devices");
  }
};

export const getAudioDeviceByIdController = async (
  req: Request,
  res: Response
) => {
  const id = req.params.id;

  try {
    let audioDevice = await getAudioDeviceById(+id);
    if (audioDevice === null) {
      res.status(404).send("No audio device found");
    } else {
      res.send(audioDevice);
    }
  } catch (error) {
    console.log("Error getting audio device:", error);
    res.status(500).send("Error getting audio device");
  }
};

export const updateAudioDeviceByIdController = async (
  req: Request,
  res: Response
) => {
  const id = +req.params.id;
  const updatedAudioDevice = req.body as IAudioDevice;
  try {
    await updateAudioDeviceById(id, updatedAudioDevice);
    res.json(updatedAudioDevice);
  } catch (error) {
    res.status(404).json({ message: `Audio device with id ${id} not found` });
  }
};

export const createAudioDeviceController = async (
  req: Request,
  res: Response
) => {
  const newAudioDevice = req.body as IAudioDevice;
  try {
    let audioDevice = await createAudioDevice(newAudioDevice);
    res.status(201).send(audioDevice);
  } catch (error: any) {
    res.status(500).send("Failed to create new audio device" + error);
  }
};

export const deleteAudioDeviceByIdController = async (
  req: Request,
  res: Response
) => {
  const id = +req.params.id;
  try {
    await deleteAudioDeviceById(id);
    res.status(200).send(`Audio device with id ${id} deleted successfully`);
  } catch (error: any) {
    res
      .status(404)
      .json({ message: `Audio device with id ${id} was not found` });
  }
};
