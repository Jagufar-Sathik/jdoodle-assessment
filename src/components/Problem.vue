<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div style="display: flex;justify-content: space-between;">
      <div class="problem-container">
  <h2 class="problem-title">{{ props.problem.title }}</h2>
  <p class="problem-description">{{ props.problem.description }}</p>
  <p><strong>Sample Input:</strong> <code>{{ props.problem.sampleInput }}</code></p>
  <p><strong>Expected Output:</strong> <code>{{ props.problem.expectedOutput }}</code></p>
  <br /><br /><br />
  <p><strong>The code editor only supports Javascript</strong></p>
  <br />
  <p><strong>*Note:</strong> The input type should be what type given in the Sample Input</p>
</div>

      <JdoodleIDE style="width:48%" @submit="handleSubmit" />
    </div>
  </template>
  
  <script setup>
import JdoodleIDE from './JdoodleIDE.vue';

import {defineProps, defineEmits} from 'vue';
  const props = defineProps({
    problem: Object,
  });
  const emit = defineEmits(['submit']);
  const handleSubmit = (val) => {
        emit('submit', val);
      };
  </script>
  <style>
  .problem-container {
    font-family: 'Arial', sans-serif;
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 5px;
    width: 48%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }

  .problem-title {
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }

  .problem-description {
    font-size: 16px;
    color: #666;
  }
  code {
  font-family: 'Courier New', Courier, monospace;
  font-size: 14px;
  background-color: #f9f9f9;
  padding: 2px 6px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

</style>
  