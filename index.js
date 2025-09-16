require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();

const corsOptions = {
    credentials: true,
    origin: [
        'http://localhost:5173',            
        'https://frotend-react-app.vercel.app'   
    ],
    allowedHeaders: ['Content-Type','Authorization'],
    methods: ['GET','POST','PUT','DELETE','OPTIONS']
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // preflight

app.use(express.json());
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
