import fs from 'fs';
import path from 'path';

// 剛才生成的圖片路徑
const sourceImg = "C:\\Users\\disey\\.gemini\\antigravity\\brain\\b6abd5f7-b499-4f9d-bf95-11504bc42090\\bg_starmap_1776612367112.png";
const destImg = path.join(process.cwd(), 'public', 'images', 'bg_starmap.jpg');
const starMapPath = path.join(process.cwd(), 'src', 'components', 'StarMap.tsx');

async function fix() {
  try {
    console.log('正在修復背景圖...');
    
    // 1. 複製圖片
    if (fs.existsSync(sourceImg)) {
      fs.copyFileSync(sourceImg, destImg);
      console.log('✅ 圖片已成功複製到 public/images/bg_starmap.jpg');
    } else {
      console.error('❌ 找不到來源圖片，請確認路徑是否正確');
    }

    // 2. 修改 StarMap.tsx 改回本地讀取
    let content = fs.readFileSync(starMapPath, 'utf8');
    
    // 替換回本地路徑的寫法
    const regex = /backgroundImage: `linear-gradient\(rgba\(5, 7, 10, [\d.]+\), rgba\(5, 7, 10, [\d.]+\)\), url\(https:\/\/images\.unsplash\.com\/[^`]+\)`,/g;
    const replacement = 'backgroundImage: `linear-gradient(rgba(5, 7, 10, 0.4), rgba(5, 7, 10, 0.6)), url(${import.meta.env.BASE_URL}images/bg_starmap.jpg)`,';
    
    content = content.replace(regex, replacement);
    
    // 確保 main 標籤的 style 也被修正 (針對我上一個版本的修改)
    const mainRegex = /backgroundImage: `linear-gradient\(rgba\(5, 7, 10, [\d.]+\), rgba\(5, 7, 10, [\d.]+\)\), url\(https:\/\/images\.unsplash\.com\/[^`]+\)`,/g;
    content = content.replace(mainRegex, replacement);

    fs.writeFileSync(starMapPath, content);
    console.log('✅ StarMap.tsx 已修復為讀取本地圖片');
    console.log('\n請重新整理網頁查看結果！');
    
  } catch (err) {
    console.error('修復失敗:', err);
  }
}

fix();
