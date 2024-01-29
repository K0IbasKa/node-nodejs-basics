import { readdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const list = async () => {

    const __fileName = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__fileName);
    const pathFiles = `${__dirname}/files`;

    try {
        const files = await readdir(pathFiles);
        for (const file of files)
            console.log(file);
    } catch (err) {
        throw new Error('FS operation failed');
    }

};

await list();