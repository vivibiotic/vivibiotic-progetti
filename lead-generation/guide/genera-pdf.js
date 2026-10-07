// Genera i PDF delle guide gratuite: node guide/genera-pdf.js
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const dir = __dirname;
  const out = path.join(dir, 'pdf');
  fs.mkdirSync(out, { recursive: true });
  const files = fs.readdirSync(dir).filter(f => /^\d\d-.*\.html$/.test(f));
  const browser = await chromium.launch();
  const page = await browser.newPage();
  for (const f of files) {
    await page.goto('file://' + path.join(dir, f), { waitUntil: 'load' });
    const name = 'vivibiotic-guida-' + f.replace(/^\d\d-/, '').replace('.html', '.pdf');
    await page.pdf({ path: path.join(out, name), format: 'A4', printBackground: true, preferCSSPageSize: true });
    console.log('Creato', name);
  }
  await browser.close();
})();
