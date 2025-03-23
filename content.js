window.onload = function () {
  console.log('Union Mods Premium Extension Loaded');
  console.log('Thank You For Using Our Extension!');
  try {
    remove_ads();
  } catch (e) {
    console.log('Error Removing Ads:', e);
  }
  const is_file_page = document.querySelector('#prime-link');
  if (is_file_page) {
    console.log('Files Found, Running URL Replacement');
    try {
      replace_download_url();
    } catch (e) {
      console.log('Error Replacing Download URL:', e);
    }
  } else {
    console.log('No Files Found On The Page');
  }
};
function remove_ads() {
  document
    .querySelector('body > main > div.row.u-padding-sides-40')
    .classList.add('hidden');
  document.querySelectorAll('li.c-card').forEach((card) => {
    if (
      card.querySelector('video') ||
      (card.querySelector('.c-card__detail') &&
        card
          .querySelector('.c-card__detail')
          .textContent.includes('Promoted by'))
    ) {
      console.log('Removing AD:', card);
      card.remove();
    }
  });
}
function replace_download_url() {
  document
    .querySelector('body > main > section > div > div > div:nth-child(2)')
    .classList.add('hidden');
  document.querySelector('#prime-link').classList.add('hidden');
  document.querySelector('#download-link').classList.remove('hidden');
  document.querySelector(
    'body > main > section > div > div > div:nth-child(3)'
  ).style.marginTop = '20px';
}
