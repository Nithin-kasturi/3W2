import express from 'express';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';
const app = express();
connectDB();

app.use(express.json());

// User routes
app.use(cors(
  {
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET"],
    credentials: true
}
))
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
