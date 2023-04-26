import axios from "axios";
import { IAudioDevicesData } from "../../models/audio_devices/IAudioDevicesData";
import { IAudioDeviceData } from "../../models/audio_devices/IAudioDeviceData";
import dotenv from "dotenv";
import { IAudioDevice } from "../../models/audio_devices/IAudioDevice";
dotenv.config();

const BASE_URL = process.env.BASE_URL;

export const getAudioDevices = async () => {
  let response = await axios.get<IAudioDevicesData>(
    `${BASE_URL}/audio-devices`
  );
  return response.data.data;
};

export const getAudioDeviceById = async (id: number) => {
  try {
    let response = await axios.get<IAudioDeviceData>(
      `${BASE_URL}/audio-devices/${id}`
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

export const updateAudioDeviceById = async (
  id: number,
  updatedAudioDevice: IAudioDevice
) => {
  console.log(id);

  try {
    const response = await axios.put<IAudioDevice>(
      `${BASE_URL}/audio-devices/${id}`,
      updatedAudioDevice
    );
    return response.data;
  } catch (error: any) {
    throw new Error(
      `Failed to update audio device with id ${id}: ${error.message}`
    );
  }
};

export const createAudioDevice = async (newAudioDevice: IAudioDevice) => {
  try {
    let response = await axios.post<IAudioDevice>(
      `${BASE_URL}/audio-devices`,
      newAudioDevice
    );
    return response.data;
  } catch (error: any) {
    throw new Error(`Failed to create new audio device: ${error.message}`);
  }
};

export const deleteAudioDeviceById = async (id: number) => {
  try {
    let response = await axios.delete(`${BASE_URL}/audio-devices/${id}`);
    return response.status;
  } catch (error: any) {
    throw new Error(`Failed to delete audio device with id: ${id}`);
  }
};
