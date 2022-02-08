import express from 'express';
import routes from './routes';

const app = express();

const PORT = 8000;

app.listen(PORT, () => {
    console.log("Server running at " + PORT);
    routes(app);
});