const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const cloudinary = require('cloudinary').v2;
const { Readable } = require('stream');

const app = express();
const storage = multer.memoryStorage();
const upload = multer({ storage });

cloudinary.config({
  CLOUD_NAME: 'CLOUD_NAME',
  API_KEY: 'API_KEY',
  API_SECRET: 'API_SECRET',
});

const bufferToStream = (buffer) => {
  const readable = new Readable({
    read() {
      this.push(buffer);
      this.push(null);
    },
  });
  return readable;
};

app.get('/', (req, res) => {
  return res.json({ message: 'Hello world 🔥🇵🇹' });
});

app.post('/', upload.single('picture'), async (req, res) => {
  const data = await sharp(req.file.buffer).webp({ quality: 20 }).toBuffer();
  const stream = cloudinary.uploader.upload_stream({ folder: 'DEV' }, (error, result) => {
    if (error) return console.error(error);
    return res.json({ URL: result.secure_url });
  });
  bufferToStream(data).pipe(stream);
});

const start = () => {
  try {
    app.listen(3333);
  } catch (error) {
    console.error(error);
    process.exit();
  }
};
start();
