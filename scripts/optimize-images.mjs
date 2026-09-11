import sharp from 'sharp';

await sharp('public/webtoolsIcon.png').resize(32, 32, { fit: 'cover' }).png({ compressionLevel: 9 }).toFile('public/favicon-32x32.png');
await sharp('public/webtoolsIcon.png').resize(180, 180, { fit: 'cover' }).png({ compressionLevel: 9 }).toFile('public/apple-touch-icon.png');
await sharp('public/webtools.png').resize({ width: 480 }).webp({ quality: 80 }).toFile('public/webtools-480.webp');
await sharp('public/webtools.png').resize({ width: 480 }).png({ compressionLevel: 9 }).toFile('public/webtools-480.png');
console.log('✓ logos optimizados');
