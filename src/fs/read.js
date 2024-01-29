import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const read = async () => {

    const __fileName = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__fileName);
    const pathFiles = `${__dirname}/files`;
    const pathFileToRead = `${pathFiles}/fileToRead.txt`

    try {
        const contant = await readFile(pathFileToRead, { encoding: 'utf8' });
        console.log(contant);
    } catch (error) {
        throw new Error('FS operation failed');
    }

};

await read();