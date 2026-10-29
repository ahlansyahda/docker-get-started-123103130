const express = require('express');
const app = express();
const port = parseInt(process.env.PORT || "3000", 10);

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});