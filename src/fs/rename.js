import { rename as renameFS } from 'node:fs/promises'
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const rename = async () => {

    const __fileName = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__fileName);
    const pathFiles = `${__dirname}/files`;
    const pathFileOld = `${pathFiles}/wrongFilename.txt`;
    const pathFileNew = `${pathFiles}/properFilename.md`;

    try {
        await renameFS(pathFileOld, pathFileNew);
    } catch (error) {
        throw new Error('FS operation failed');
    }

};

await rename();