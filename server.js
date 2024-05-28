import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = 3001;
app.get('/data.json', (req, res) => {
    res.sendFile(`${__dirname}/data.json`);
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});