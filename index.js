const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))

// 等待页面加载完成后生成二维码
window.onload = function() {
    try {
        const qrcodeElement = document.getElementById('qrcode');
        if (!qrcodeElement) {
            console.error('找不到 ID 为 qrcode 的元素');
            return;
        }

        const currentURL = window.location.href;
        const qrcode = new QRCode(qrcodeElement, {
            text: currentURL,
            width: 128,
            height: 128,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H
        });
    } catch (error) {
        console.error('生成二维码时出错：', error);
    }
}