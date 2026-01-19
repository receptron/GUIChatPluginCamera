<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
    <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
      Camera Plugin Demo
    </h1>

    <div class="space-y-4">
      <button
        @click="takePhoto"
        class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Take Photo
      </button>

      <div
        v-if="result"
        class="max-w-md p-4 bg-white dark:bg-gray-800 rounded-lg shadow"
      >
        <h2 class="text-lg font-semibold mb-4">Result:</h2>
        <Preview :result="result" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { ToolResult } from "gui-chat-protocol/vue";
import type { ImageToolData } from "../src/core/types";
import { plugin, Preview } from "../src/vue";

const result = ref<ToolResult<ImageToolData> | null>(null);

const takePhoto = async () => {
  const context = {};
  result.value = await plugin.execute(context, {});
};
</script>
