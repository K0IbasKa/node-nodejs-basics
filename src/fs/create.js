import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { existsSync } from 'node:fs';
import path from 'node:path';

const create = async () => {

    const __fileName = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__fileName);
    const fileNameFresh = 'fresh.txt';
    const pathFresh = `${__dirname}/files/${fileNameFresh}`

    if (existsSync(pathFresh)) {
        throw new Error('FS operation failed');
    }
    else {
        await writeFile(pathFresh, 'I am fresh and young');
    }
};

await create();