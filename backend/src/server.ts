import router from './app/routes/router.js';
import cors from 'cors'; 
import express from 'express';

const app = express();
const port = process.env.PORT || 5000;
app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));
app.use(express.json()); 

app.use((req, res, next) => {
  console.log(`Request method: ${req.method}, URL: ${req.url}`);
  next();
});
app.use('/api', router)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
