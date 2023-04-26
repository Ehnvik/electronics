import { IAudioDeviceAttributes } from "./IAudioDeviceAttributes";

export interface IAudioDevice {
  id?: number;
  attributes: IAudioDeviceAttributes;
}
