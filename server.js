const express = require('express');
const http = require('http');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to handle requests
app.use(express.json());

// Route for load distribution
app.get('/load-balance', (req, res) => {
    res.send('Tải trọng được phân phối thành công!');
});

// Start the server
const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});
