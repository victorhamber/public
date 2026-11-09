const pub = /^Your post has been published on ([^\s]+)(?: at(?:\s+(.*))?)?$/i;
const err = /^An error occurred while posting on ([^\s:]+)(?::\s*(.+))?$/is;

for (const s of [
  'Your post has been published on Whatsapp at',
  'Your post has been published on Whatsapp at https://x.com',
  'Your post has been published on Whatsapp',
]) {
  const m = s.match(pub);
  console.log('PUB', !!m, m?.[1], JSON.stringify(m?.[2]));
}

const e =
  'An error occurred while posting on whatsapp: WAHA 500: {"statusCode":500}';
const m = e.match(err);
console.log('ERR', !!m, m?.[1], (m?.[2] || '').slice(0, 50));
