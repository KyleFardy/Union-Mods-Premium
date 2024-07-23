window.onload = function () {
    console.log("Union Mods Premium Extension Loaded");
    console.log("Thank You For Using Our Extension!");
    try {
        remove_ads();
    } catch (e) {
        console.error("Error Removing Ads:", e);
    }
    const is_file_page = document.querySelector("#download-btn");
    if (is_file_page) {
        console.log("Files Found, Running URL Replacement");
        try {
            replace_download_url();
        } catch (e) {
            console.error("Error Replacing Download URL:", e);
        }
    } else {
        console.log("No Files Found On The Page");
    }
    add_image();
};
function remove_ads() {
    document.querySelectorAll('li.c-card').forEach(card => {
        if (card.querySelector('video') || card.querySelector('.c-card__detail') && card.querySelector('.c-card__detail').textContent.includes('Promoted by')) {
            console.log("Removing AD:", card);
            card.remove();
        }
    });
}
function replace_download_url() {
    const downloadBtn = document.querySelector("#download-btn");
    if (downloadBtn && downloadBtn.href) {
        if (downloadBtn.href.match(/file=(\d+)/)) {
            downloadBtn.href = `https://unionmods.com/?API=FileDownload&fileID=${downloadBtn.href.match(/file=(\d+)/)[1]}`;
        }
    }
}
function add_image() {
    const img = document.createElement('img');
    img.src = chrome.runtime.getURL('images/logo.png'); // Path to your image file in the extension directory
    img.alt = 'Description of Image';
    img.style.width = '100px'; // Adjust size as needed
    img.style.height = 'auto';

    // Append the image to a specific element, e.g., body
    document.body.appendChild(img);
}