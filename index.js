import express from "express";

const PORT = 3000;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(404).json({
    message: 'Сообщение',
    arr: ['item 1', 'item 2']
  })
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));