/**
 * Camera Plugin Types
 */

/** Camera takes no arguments - empty interface */
export type CameraArgs = Record<string, never>;

/** Image data returned by the camera */
export interface ImageToolData {
  imageData: string;
  prompt: string;
}
