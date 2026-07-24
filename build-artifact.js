const fs = require('fs');
const path = require('path');
// The script lives at the repo root, so derive ROOT from its own location.
// This keeps the build working no matter what the current directory is
// (e.g. when invoked from a Stop hook).
const ROOT = __dirname;

const css = fs.readFileSync(path.join(ROOT, 'css/styles.css'), 'utf8');
const indexHtml = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

// The <script> load order, taken from index.html
const scriptOrder = [];
const scriptRe = /<script src="([^"?]+)(?:\?[^"]*)?"><\/script>/g;
let m;
while ((m = scriptRe.exec(indexHtml)) !== null) scriptOrder.push(m[1]);

// Body markup = everything between <body> and the first <script src=...>
const bodyStart = indexHtml.indexOf('<body>') + '<body>'.length;
const firstScript = indexHtml.indexOf('<script src=');
const bodyMarkup = indexHtml.slice(bodyStart, firstScript).trim();

// The early theme-detection inline script (from the <head>)
const themeScriptMatch = indexHtml.match(/<script>([\s\S]*?localStorage[\s\S]*?)<\/script>/);
const themeScript = themeScriptMatch ? themeScriptMatch[1].trim() : '';

// Inline every section script + app.js
const inlinedScripts = scriptOrder.map((rel) => {
  const code = fs.readFileSync(path.join(ROOT, rel), 'utf8');
  return '<script>\n' + code + '\n</script>';
}).join('\n');

// Artifact content: NO doctype/html/head/body wrappers (publish adds those).
// Title tag included so the artifact keeps its identity.
const out = `<title>NYUAD Compass — Student Guide &amp; Four-Year Planner</title>
<style>
${css}
</style>
<script>
${themeScript}
</script>
${bodyMarkup}
${inlinedScripts}
`;

const outPath = path.join(ROOT, 'nyuad-compass.html');
fs.writeFileSync(outPath, out, 'utf8');
console.log('Wrote ' + outPath);
console.log('Scripts inlined: ' + scriptOrder.length);
console.log('Output size: ' + (out.length / 1024).toFixed(0) + ' KB');
