const express = require('express');
const helmet = require('helmet');

const app = express();
const port = process.env.PORT || 3000;

// Use Helmet for security headers
app.use(helmet());

// Simple route
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Omni Secure App</title></head>
      <body>
        <h1>🔒 Omni Secure Application</h1>
        <p>DevSecOps Pipeline Demo</p>
        <p>Version: 1.0.0</p>
      </body>
    </html>
  `);
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

// Start server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});