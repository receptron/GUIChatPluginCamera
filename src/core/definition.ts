/**
 * Camera Plugin Tool Definition
 */

export const TOOL_NAME = "takePhoto";

export const TOOL_DEFINITION = {
  type: "function" as const,
  name: TOOL_NAME,
  description: "Take a photo using the device camera.",
  parameters: {
    type: "object" as const,
    properties: {},
    required: [] as string[],
  },
};

export const SYSTEM_PROMPT = `When the user asks to take a photo, use selfie, or capture an image from the camera, you MUST use the ${TOOL_NAME} API.`;
