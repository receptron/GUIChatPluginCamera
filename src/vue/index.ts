/**
 * Camera Plugin - Vue Implementation
 */

import "../style.css";

import { createApp } from "vue";
import type { ToolPlugin, ToolContext, ToolResult } from "gui-chat-protocol/vue";
import type { CameraArgs, ImageToolData } from "../core/types";
import { TOOL_DEFINITION, SYSTEM_PROMPT } from "../core/definition";
import CameraCapture from "./CameraCapture.vue";
import View from "./View.vue";
import Preview from "./Preview.vue";

/**
 * Captures a photo from the user's camera with preview UI
 */
const takePhoto = async (
  __context: ToolContext,
  __args: CameraArgs,
): Promise<ToolResult<ImageToolData>> => {
  return new Promise((resolve) => {
    // Create container for the camera component
    const container = document.createElement("div");
    document.body.appendChild(container);

    // Create Vue app with the camera capture component
    const app = createApp(CameraCapture, {
      onCapture: (imageData: string) => {
        // Clean up
        app.unmount();
        document.body.removeChild(container);

        // Return success result
        resolve({
          data: {
            imageData,
            prompt: `Photo taken at ${new Date().toLocaleString()}`,
          },
          message: "photo captured successfully",
          instructions:
            "Acknowledge that the photo was taken and has been already presented to the user. You can describe what you see in the photo if appropriate.",
        });
      },
      onCancel: () => {
        // Clean up
        app.unmount();
        document.body.removeChild(container);

        // Return cancellation result - LLM learns about cancellation from the function return value
        resolve({
          message: "photo capture cancelled by user",
          cancelled: true,
        });
      },
    });

    app.mount(container);
  });
};

export const plugin: ToolPlugin<ImageToolData, unknown, CameraArgs> = {
  toolDefinition: TOOL_DEFINITION,
  execute: takePhoto,
  generatingMessage: "Opening camera...",
  waitingMessage: "Taking photo...",
  isEnabled: () => {
    // Camera API is available in most modern browsers
    return (
      typeof navigator !== "undefined" &&
      !!navigator.mediaDevices &&
      !!navigator.mediaDevices.getUserMedia
    );
  },
  viewComponent: View,
  previewComponent: Preview,
  systemPrompt: SYSTEM_PROMPT,
};

// Re-export types
export type { CameraArgs, ImageToolData } from "../core/types";

// Re-export utilities
export { TOOL_NAME, TOOL_DEFINITION, SYSTEM_PROMPT } from "../core/definition";

export { CameraCapture, View, Preview };

// Default export for MulmoChat compatibility
export default { plugin };
