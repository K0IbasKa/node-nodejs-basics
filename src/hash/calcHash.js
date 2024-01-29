import { createReadStream } from 'node:fs';
import { Transform } from 'node:stream';
import { fileURLToPath } from 'node:url';
import path from 'path';
const { createHmac } = await import('node:crypto');

const calculateHash = async () => {

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
    const readStream = createReadStream(filePath);
    const data = 'I dont like dota2';
    const output = process.stdout;
    const hashSHA256 = new Transform({
        transform(chunk, encoding, callback) {
            this.push(createHmac('sha256', chunk).update(data).digest('hex'));
            callback();
        },
    });

    readStream.pipe(hashSHA256).pipe(output);
};

await calculateHash();
