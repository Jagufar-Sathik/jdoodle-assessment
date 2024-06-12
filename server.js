const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/execute', async (req, res) => {
  const { clientId, clientSecret, script, testCases, language, versionIndex } = req.body;
  const functionNameMatch = script.match(/function\s+([a-zA-Z0-9_]+)\s*\(/);
  if (!functionNameMatch) {
    return res.status(400).json({ error: 'No function definition found in the script.' });
  }
  const functionName = functionNameMatch[1];

  const wrappedScript = `
    ${script}
    const testCases = ${JSON.stringify(testCases)};
    const results = testCases.map(({input, output}) => {
      const result = ${functionName}(input);
      return {input, expected: output, actual: result, passed: result === output};
    });
    console.log(JSON.stringify(results));
  `;

  try {
    const response = await axios.post('https://api.jdoodle.com/v1/execute', {
      clientId,
      clientSecret,
      script: wrappedScript,
      stdin: "",
      language,
      versionIndex,
      compileOnly: false,
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});
