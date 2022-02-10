import fs from 'fs';

export async function parseCsv() {
    let csvData: any[] = [];

    const filepath = './uploads/csv_matrix.csv';
    
    try {
        let d = fs.readFileSync(filepath, 'utf8');
        return d;
    } catch (err) {
        console.error(err)
    }
}