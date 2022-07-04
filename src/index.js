const nasaKey = process.env.NASA_KEY;

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

async function getDailyImage() {
    const dailyImageUrl = `https://api.nasa.gov/planetary/apod?api_key=${nasaKey}`;

    const response = await fetch(dailyImageUrl);
    const jsonResponse = await response.json();
    console.log('NASA JSON Response', jsonResponse);

    return {
        title: jsonResponse.title,
        url: jsonResponse.url
    };
}
