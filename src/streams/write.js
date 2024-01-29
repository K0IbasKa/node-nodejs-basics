import { createWriteStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'path';

const write = async () => {

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const readStream = process.stdin;
    const writeStream = createWriteStream(
        path.join(__dirname, 'files', 'fileToWrite.txt')
    );

    readStream.pipe(writeStream);
};

await write();
