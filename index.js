const express = require('express');
const app = express();
const port = 3001;

let status = false;  

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: status });
});

app.post('/', (req, res) => {
  status = !status;
  res.json({ message: 'Status changed', newStatus: status });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
