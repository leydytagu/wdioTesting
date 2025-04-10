async function getCurrentUrl() {
  return await browser.getUrl();
}

async function openUrl(url) {
  await browser.url(url);
  await browser.setWindowSize(1280, 800);
}

module.exports = {
  getCurrentUrl,
  openUrl
};
