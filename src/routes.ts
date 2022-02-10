import {Express, Response, Request} from 'express';
import {echoCsv} from './controller/csv.controller';
import uploadCsv from './middleware/upload.csv';

function routes(app: Express) {
    app.get('/', (req: Request, res: Response) => res.sendStatus(200));
    app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));
    app.post('/echo', uploadCsv, echoCsv);
}

export default routes;