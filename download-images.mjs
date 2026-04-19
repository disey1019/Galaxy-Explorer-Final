import fs from 'fs';
import https from 'https';
import path from 'path';

const download = (url, dest) => new Promise((resolve, reject) => {
  https.get(url, (res) => {
    // 處理重定向 (Redirects)
    if (res.statusCode === 301 || res.statusCode === 302) {
      return download(res.headers.location, dest).then(resolve).catch(reject);
    }
    const file = fs.createWriteStream(dest);
    res.pipe(file);
    file.on('finish', () => { file.close(); resolve(); });
  }).on('error', (err) => { fs.unlink(dest, () => {}); reject(err); });
});

async function main() {
  const publicImgDir = path.join(process.cwd(), 'public', 'images');
  if (!fs.existsSync(publicImgDir)) fs.mkdirSync(publicImgDir, { recursive: true });

  const constantsPath = path.join(process.cwd(), 'src', 'constants.ts');
  let constantsContent = fs.readFileSync(constantsPath, 'utf8');
  
  const starMapPath = path.join(process.cwd(), 'src', 'components', 'StarMap.tsx');
  let starMapContent = fs.readFileSync(starMapPath, 'utf8');

  const urlRegex = /https:\/\/(?:lh3\.googleusercontent\.com|images\.unsplash\.com|upload\.wikimedia\.org)\/[^'"]+/g;
  const constantsUrls = [...new Set(constantsContent.match(urlRegex) || [])];
  const starMapUrls = [...new Set(starMapContent.match(urlRegex) || [])];
  
  console.log('開始下載圖片...');
  
  let counter = 1;
  for (const url of constantsUrls) {
    const filename = `hero_${counter++}.jpg`;
    console.log(`下載中: ${filename}`);
    await download(url, path.join(publicImgDir, filename));
    constantsContent = constantsContent.replace(`'${url}'`, `import.meta.env.BASE_URL + 'images/${filename}'`);
  }

  for (const url of starMapUrls) {
    const filename = `bg_starmap.jpg`;
    console.log(`下載中: ${filename}`);
    await download(url, path.join(publicImgDir, filename));
    
    // 替換 StarMap.tsx 中的 inline style (支援不同程度的 gradient)
    const starMapUrlRegex = new RegExp(`linear-gradient\\(rgba\\(5, 7, 10, [\\d.]+\\), rgba\\(5, 7, 10, [\\d.]+\\)\\), url\\(${url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\)`, 'g');
    starMapContent = starMapContent.replace(starMapUrlRegex, `linear-gradient(rgba(5, 7, 10, 0.4), rgba(5, 7, 10, 0.6)), url(\${import.meta.env.BASE_URL}images/${filename})`);
  }

  fs.writeFileSync(constantsPath, constantsContent);
  fs.writeFileSync(starMapPath, starMapContent);
  console.log('\n✅ 圖片下載與程式碼替換完成！');
}

main().catch(console.error);
