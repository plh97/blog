export const langMap: Record<string, string> = {
  ts: "tsx",
  typescript: "tsx",
  js: "tsx",
  jsx: "tsx",
  javascript: "tsx",
};

export function fmtLang(language: string) {
  return langMap[language] ?? language;
}
