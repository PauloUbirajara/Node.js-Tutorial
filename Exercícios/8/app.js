const fs = require('fs');
const zlib = require('zlib'); // Módulo para compressão de arquivos

// const gzip = zlib.createGzip();

// const readStream = fs.createReadStream('./example.txt', 'utf8');
// // const writeStream = fs.createWriteStream('./example2.txt');
// const writeStream = fs.createWriteStream('./example2.txt.gz'); // Formato o qual 'gzip' compacta os arquivos

// // Pode substituir o Event Emitter de ReadStream
// readStream.pipe(writeStream);

// // Cria um arquivo compactado e manda pro writeStream
// readStream.pipe(gzip).pipe(writeStream);

const gunzip = zlib.createGunzip();

const readStream = fs.createReadStream('./example2.txt.gz');
// const writeStream = fs.createWriteStream('./example2.txt');
const writeStream = fs.createWriteStream('./uncompressed.txt');

// Pode substituir o Event Emitter de ReadStream
// readStream.pipe(writeStream);

// Cria um arquivo compactado e manda pro writeStream
readStream.pipe(gunzip).pipe(writeStream);