export function defaultMatrix(matrixData: string[]): string[] {
    return matrixData;
}

export function invertMatrix(matrixData: any): any[] {  
    matrixData = matrixData.split('\n');
    
    // Convert to multidimensional array||matrix
    matrixData = convertToArray(matrixData);
    
    // Set height and width of matrix
    let arrayWidth = matrixData.length || 0;
    let arrayHeight = matrixData[0] instanceof Array ? matrixData[0].length : 0;

    // Return 0 if it's an empty or 0 matrix
    if(arrayHeight === 0 || arrayWidth === 0) return [];

    const invertedMatrix: any = [];

    for(let i = 0; i < arrayHeight; i++) {
        invertedMatrix[i] = [];

        for(let j = 0; j < arrayWidth; j++) {
            // invert matrix
            invertedMatrix[i][j] = matrixData[j][i];
        }
    }

    return invertedMatrix;
}

export function flattenMatrix(matrixData: string): string {

    let strippedArray = stripAndSplitArray(matrixData);
    let flattenedData: any = flattenArray(strippedArray);
    
    return flattenedData.join(',');
}

export function sumMatrix(matrixData: any): number {
    let strippedArray = stripAndSplitArray(matrixData);
    let flattenedData = flattenArray(strippedArray);
    
    let sum = flattenedData.reduce((a,b) => a + b);
    return sum;
}

export function multiplyMatrix(matrixData: any[]): number {
    let strippedArray = stripAndSplitArray(matrixData);
    let flattenedData = flattenArray(strippedArray);

    let multipliedArray = flattenedData.reduce((a,b) => a * b);
    return multipliedArray;
}

const convertToArray = (data: any[]) => {
    // Convert to multidimensional array||matrix
    for(let i = 0; i < data.length; i++) {
        let tempArray = data[i].split(',');
        data[i] = tempArray;
    }
    return data;
}

const flattenArray = (arrayData: string[]) => {
    let data = [];

    for (let i of arrayData) {
        if (i.trim().length > 0) data.push(parseInt(i));
    }

    return data;
}

const stripAndSplitArray = (arrayData: any) => {
    let strippedData = arrayData.replaceAll("\n", ",");

    return strippedData.split(',');
}



