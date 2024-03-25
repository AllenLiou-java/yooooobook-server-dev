//  /src/index.js
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3500;
const app = express();
require('dotenv').config();

// 資料解析用的相關設定
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

// Routes
app.use('/api', require('./routes/index'));

app.listen(PORT, () => {
  console.log('Server on port 3500');
});
