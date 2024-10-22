import express from 'express';

const app = express();

const protocol = process.env.PROTOCOL || 'http';
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(port, host, () => {
  console.log(`Server started at ${protocol}://${host}:${port}`);
});
