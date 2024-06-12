<template>
  <div id="app">
    <ProgressBar :progress="progress" />
    <Problem
      v-if="!showResult"
      :problem="currentProblem"
      @submit="handleSubmit"
    />
    <Result v-if="showResult" :results="results" />
  </div>
</template>

<script>
import ProblemBank from './ProblemBank';
import axios from 'axios';
import Problem from './components/Problem.vue';
import Result from './components/Result.vue';
import ProgressBar from './components/ProgressBar.vue';

export default {
  data() {
    return {
      problems: [],
      currentProblemIndex: 0,
      results: [],
      showResult: false,
      progress: 0
    };
  },
  components: {
    Problem,
    Result,
    ProgressBar
  },
  created() {
    this.problems = this.getRandomProblems(ProblemBank, 5);
  },
  computed: {
    currentProblem() {
      return this.problems[this.currentProblemIndex];
    }
  },
  methods: {
    getRandomProblems(problems, count) {
      let shuffled = problems.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    },
    async handleSubmit(answer) {
      const result = await this.runCode(this.currentProblem.testCases, answer);
      const cleanedResult = result.replace(/\\/g, '');
      let parsedResult = JSON.parse(cleanedResult);
      parsedResult.forEach(testCase => {
        testCase.problem = this.currentProblem.title;
      });
      const formattedResult = JSON.stringify(parsedResult);
      this.results.push(formattedResult);
      if (this.currentProblemIndex < this.problems.length - 1) {
        this.currentProblemIndex++;
        this.progress = ((this.currentProblemIndex + 1) / this.problems.length) * 100;
      } else {
        this.showResult = true;
      }

    },
    async runCode(testCases, code) {
      const response = await axios.post('http://localhost:3000/execute', {
          clientId: '20423c6ef6a8f6d4e51449c359a629ff',
          clientSecret: '897166b1840851f06c5e1a6b5d2962b694b2a9f0716a58f096d486d8aa212532',
          script: code,
          stdin: '',
          testCases,
          language: 'nodejs',
          versionIndex: 6,
          compileOnly: false

        });

      return response.data.output.trim();
    }
  }
};
</script>
