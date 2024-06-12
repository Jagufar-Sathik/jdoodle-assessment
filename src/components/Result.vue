<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="results-container">
    <h2>Results Table</h2>
    <table class="results-table">
      <thead>
        <tr>
          <th>Problem</th>
          <th v-for="(result, index) in maxTestCases" :key="index">Test Case {{ index + 1 }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(problemResults, problemIndex) in formattedResults" :key="problemIndex">
          <td>{{ problemResults[0]?.problem || `Problem ${problemIndex + 1}` }}</td>
          <td v-for="(testResult, testCaseIndex) in problemResults" :key="testCaseIndex">
            <span :style="{ color: testResult.passed ? 'green' : 'red' }">
              {{ testResult.passed ? 'Passed' : 'Failed' }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  results: Array,
});

const cleanedResults = props.results.map(result => {
  const cleanedResult = result.replace(/\\/g, '');
  const splitResults = cleanedResult.match(/({[^}]*})/g);
  return splitResults.map(jsonStr => JSON.parse(jsonStr));
});

const maxTestCases = Math.max(...cleanedResults.map(result => result.length));
const formattedResults = cleanedResults;
</script>

<style scoped>
.results-container {
  margin: 20px;
  font-family: Arial, sans-serif;
}

h2 {
  text-align: center;
  color: #333;
}

.results-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 18px;
  min-width: 400px;
}

.results-table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
  font-weight: bold;
}

.results-table th,
.results-table td {
  padding: 12px 15px;
  border: 1px solid #ddd;
}

.results-table tbody tr {
  border-bottom: 1px solid #ddd;
}

.results-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.results-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}

.results-table tbody tr:hover {
  background-color: #f1f1f1;
}
</style>
