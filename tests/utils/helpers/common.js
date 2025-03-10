export async function getCurrentUrl() {
  return await browser.getUrl();
}

export async function openUrl(url) {
  await browser.url(url);
}