import {Request, Response} from 'express';
import { parseCsv } from '../service/csv.reader';
import { SUM, FLATTEN, INVERTED, MULTIPLY, DEFAULT } from '../utils/constants';
import { invertMatrix, flattenMatrix, sumMatrix, multiplyMatrix, defaultMatrix } from '../utils/format.csv';

const getData = () => {
    return 
}

export async function echoCsv(req: Request, res: Response) {
    
    let csvData: any;
    let formatedCsvData: any;

    const renderType: string = req.body.render_type;

    try {
        csvData = await parseCsv();        
    } catch (e: any) {
        return res.status(500).json({
            message: e.message
        });
    }

    switch (renderType) {
        case INVERTED:
            formatedCsvData = invertMatrix(csvData);
            break;
        case FLATTEN:
            formatedCsvData = flattenMatrix(csvData);
            break;
        case SUM:
            formatedCsvData = sumMatrix(csvData);
            break;
        case MULTIPLY:
            formatedCsvData = multiplyMatrix(csvData);
            break;
    
        default:
            formatedCsvData = defaultMatrix(csvData);
            break;
    }

    return res.status(200).json(formatedCsvData);
}