import fs from 'fs';

const html = fs.readFileSync('dist/brands/guangsu/index.html', 'utf8');
console.log('Guangsu HTML length:', html.length);
console.log('Includes sahude affiliate URL:', html.includes('https://sahude.gsyvipaff.com/#/?code=keqgvT5Y'));
console.log('Includes rel=nofollow sponsored noopener:', html.includes('rel="nofollow sponsored noopener"'));
console.log('Includes Snooker 147:', html.includes('致敬斯诺克147永久套餐'));
console.log('Includes coupon AMM:', html.includes('AMM'));
