const fs = require('fs');
const path = require('path');

const srcDir = __dirname;
const distDir = path.join(srcDir, 'dist');
const imagesSrc = path.join(srcDir, '..', 'imagenes_pa2026');
const imagesDest = path.join(distDir, 'imagenes_pa2026');

// Clean dist
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// Copy static app files
const files = ['index.html', 'styles.css', 'app.js', 'data.js'];
for (const file of files) {
  fs.copyFileSync(path.join(srcDir, file), path.join(distDir, file));
}

// Copy images
function copyRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

if (fs.existsSync(imagesSrc)) {
  copyRecursive(imagesSrc, imagesDest);
  console.log('Images copied:', imagesSrc, '->', imagesDest);
} else {
  console.error('Images not found at', imagesSrc);
  process.exit(1);
}

console.log('Build complete:', distDir);
