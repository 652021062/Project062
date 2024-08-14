const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// เรียกใช้ dotenv.config() เพื่อโหลดตัวแปรสภาพแวดล้อม
dotenv.config();

const app = express();

// ใช้ JSON parser
app.use(express.json());

// เชื่อมต่อกับ MongoDB โดยใช้ MONGO_DB_URI
mongoose.connect(process.env.MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connect'))
.catch(err => console.log('Error connecting to MongoDB:', err));

// ใช้ routes
const authRoute = require('./routes/auth');
app.use('/api/user', authRoute);

const productRoute = require('./routes/product');
app.use('/api/', productRoute);

// กำหนดพอร์ตและเริ่มเซิร์ฟเวอร์
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
