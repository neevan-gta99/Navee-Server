import express from 'express'
import cors from 'cors';
import cookieParser from 'cookie-parser';
import users from './routes/userRoutes.js'
import test from './routes/testRoutes.js'
import product from './routes/addProductRoutes.js'
import seller from './routes/sellerRoutes.js'
import getProducts from './routes/getProductRoutes.js';

const app = express();


app.use(express.json());
app.use(cookieParser()); 
app.use(express.urlencoded({ extended: true }));


app.use(cors({              
  origin: ['http://localhost:5173', "https://trendora-client.vercel.app"],
  credentials: true
}));



app.use('/api/users',users);
app.use('/api/test',test);
app.use('/api/addProduct', product);
app.use('/api/seller', seller);
app.use('/api/getProduct',getProducts)

// app.use((req, res) => {
//   console.log("yes");
//   res.status(404).json({ error: "Route not found" });
// });

export default app;