import * as fs from 'fs';

const deleteFile = (filePath: string): void => {
    try {
        fs.unlinkSync(filePath);
    } catch(err) {
        console.error(err);
    }
}


export {
    deleteFile
}
