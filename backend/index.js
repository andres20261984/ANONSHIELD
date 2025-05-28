const express = require('express');
const path = require('path');
const cors = require('cors');
const { createClient } = require('redis');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const redis = createClient({ url: process.env.REDIS_URL || 'redis://localhost:6379' });
redis.connect().catch(console.error);

// Endpoint API
app.get('/generate', async (req, res) => {
  const id = uuidv4().slice(0, 8);
  const email = `${id}@ephemail.org`;
  await redis.setEx(email, 600, JSON.stringify({ createdAt: Date.now() }));
  res.json({ email });
});

// Servir frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, () => {
  console.log(`Servidor activo en http://localhost:${port}`);
});
