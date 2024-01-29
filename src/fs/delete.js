import { unlink } from 'node:fs/promises'
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const remove = async () => {

    const __fileName = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__fileName);
    const pathFiles = `${__dirname}/files`;
    const pathFileDelete = `${pathFiles}/fileToRemove.txt`;

    try {
        await unlink(pathFileDelete,);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await remove();