import { getDailyImage } from './nasa/api';

updateDailyImage();

async function updateDailyImage() {
    const imageElement = document.getElementById('dailyImage');
    const imageTitleElement = document.getElementById('dailyImageTitle');

    const getDailyImagePromise = getDailyImage();

    const { title, url } = await getDailyImagePromise;

    imageElement.src = url;
    imageElement.alt = title;
    imageTitleElement.textContent = title;
}
