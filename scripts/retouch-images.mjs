import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = path.resolve('public/images');
const backupDir = path.resolve('public/images/raw-backup');

if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

const files = [
  'ai-chat.jpeg',
  'materials-bank.jpeg',
  'marketplace.jpeg',
  'homescreen.jpeg',
  'blog.jpeg',
  'leaderboard.jpeg'
];

async function processImages() {
  console.log('Starting image retouching and enhancement...');

  for (const file of files) {
    const filePath = path.join(imagesDir, file);
    const backupPath = path.join(backupDir, file);

    if (!fs.existsSync(filePath)) {
      console.log(`Skipping ${file} - does not exist`);
      continue;
    }

    // Save backup if not already backed up
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(filePath, backupPath);
    }

    const image = sharp(backupPath);
    const metadata = await image.metadata();

    console.log(`Processing ${file}: current size ${metadata.width}x${metadata.height}`);

    let pipeline = sharp(backupPath);

    if (metadata.width && metadata.width < 1000) {
      // Upscale 2x using high quality Lanczos3
      const targetWidth = metadata.width * 2;
      const targetHeight = metadata.height * 2;
      pipeline = pipeline.resize(targetWidth, targetHeight, {
        kernel: sharp.kernel.lanczos3,
        fit: 'fill',
      });
    }

    // Apply unsharp mask for razor sharp text and clean line edges
    pipeline = pipeline
      .sharpen({
        sigma: 1.2,
        m1: 0.9,
        m2: 2.2,
        x1: 2,
        y2: 10,
        y3: 20
      })
      .modulate({
        saturation: 1.05,
        brightness: 1.02
      })
      .jpeg({
        quality: 95,
        chromaSubsampling: '4:4:4',
        mozjpeg: true
      });

    const tempPath = path.join(imagesDir, `temp-${file}`);
    await pipeline.toFile(tempPath);
    fs.renameSync(tempPath, filePath);

    const newMeta = await sharp(filePath).metadata();
    console.log(`✓ Enhanced ${file} -> ${newMeta.width}x${newMeta.height} (${Math.round(fs.statSync(filePath).size / 1024)} KB)`);
  }

  console.log('Image enhancement complete!');
}

processImages().catch(err => {
  console.error('Error enhancing images:', err);
  process.exit(1);
});
