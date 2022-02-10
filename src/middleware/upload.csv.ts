import {Request, Response} from 'express';
import multer from 'multer';

const fileFilter = (req: Request, file: any, cb: any) => {
    if((file.mimetype).includes('csv')){
        cb(null, true);
    } else{
        cb(new Error("Not a PDF File!!"), false);
    }
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, 'csv_matrix.csv');
    }
});

let uploadCsv = multer({ storage: storage, fileFilter: fileFilter, limits: { fileSize: 1024 }});

export default uploadCsv.single('csvFile')