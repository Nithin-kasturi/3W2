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
    origin: ["https://3-w2-qv9i.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
}
))
app.use('/api/users', userRoutes);
app.get('/',(req,res)=>{
    res.send("Backend is working")
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
