import { cp } from 'node:fs/promises'
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const copy = async () => {

    const __fileName = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__fileName);
    const pathFiles = `${__dirname}/files`;
    const pathFilesCopy = `${pathFiles}_copy`;

    try {
        await cp(pathFiles, pathFilesCopy, { recursive: true, force: false, errorOnExist: true });
    } catch (error) {
        throw new Error('FS operation failed');
    }
}
await copy();
