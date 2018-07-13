const sharp = require('sharp');
sharp(inputBuffer)
  .resize(320, 240)
  .toFile('output.webp', (err, info)); // => ... );
  // A Promises/A+ promise is returned when callback is not provided.
sharp('nodejs.png')
  .rotate()
  .resize(200)
  .toBuffer()
  // .then( data => ... )
  // .catch( err => ... );
const roundedCorners = Buffer.from(
  '<svg><rect x="0" y="0" width="200" height="200" rx="50" ry="50"/></svg>'
);

const roundedCornerResizer =
  sharp()
    .resize(200, 200)
    .overlayWith(roundedCorners, { cutout: true })
    .png();

readableStream
  .pipe(roundedCornerResizer)
  .pipe(writableStream);