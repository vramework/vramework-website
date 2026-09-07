import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: 1050 }, deviceScaleFactor: 2 });
await p.goto('http://localhost:3013/openapis', { waitUntil: 'networkidle' });
await p.waitForTimeout(1200);
await p.screenshot({ path: '/private/tmp/claude-501/-Users-yasser-git-pikku-website/770a5992-3daa-4c51-bb8a-23b9656fb341/scratchpad/oa.png' });
await b.close();
