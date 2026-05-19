// @ts-check
const lightTheme = 'corporate';
const darkTheme = 'business';

const lightThemeUrl = `https://cdn.jsdelivr.net/npm/daisyui@latest/theme/${lightTheme}/object.js`;
const darkThemeUrl = `https://cdn.jsdelivr.net/npm/daisyui@latest/theme/${darkTheme}/object.js`;

/**
 * @param {string} url
 * @returns {Promise<Record<string, string>>}
 */
async function fetchTheme(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch theme from ${url}: ${res.status} ${res.statusText}`);
  }
  const themeStr = await res.text();
  if (!themeStr.startsWith('export default {') || !themeStr.endsWith('};')) {
    throw new Error(`Unexpected theme format from ${url}`);
  }

  const themeObjStr = themeStr.slice('export default '.length, -1);
  return JSON.parse(themeObjStr);
}

/**
 * @param {string} themeName
 * @param {Record<string, string>} themeData
 */
function buildThemeBlock(themeName, themeData) {
  const colorVarLines = Object.entries(themeData)
    .filter(([key, value]) => key.startsWith('--color-'))
    .map(([key, value]) => `      ${key}: ${value};`);
  return `    @variant ${themeName} {\n${colorVarLines.join('\n')}\n    }`;
}

const lightThemeData = await fetchTheme(lightThemeUrl);
const darkThemeData = await fetchTheme(darkThemeUrl);

const lightThemeBlock = buildThemeBlock('light', lightThemeData);
const darkThemeBlock = buildThemeBlock('dark', darkThemeData);

console.log(`@layer theme {\n  :root {\n${lightThemeBlock}\n${darkThemeBlock}\n  }\n}`);

const inlineThemeBlock = Object.keys(lightThemeData)
  .filter(key => key.startsWith('--color-'))
  .map(key => `  ${key}: var(${key});`)
  .join('\n');
console.log(`@theme inline {\n${inlineThemeBlock}\n}`);
