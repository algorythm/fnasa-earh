const nasaKey = process.env.NASA_KEY;

getDailyImage();

async function getDailyImage() {
    const dailyImageUrl = `https://api.nasa.gov/planetary/apod?api_key=${nasaKey}`;

    const imageElement = document.getElementById('dailyImage');
    const imageTitleElement = document.getElementById('dailyImageTitle');

    const response = await fetch(dailyImageUrl);
    if (response.status != 200) {
        imageTitleElement.textContent = 'ERROR: Failed to load image';
        return;
    }

    console.log(response);
    const jsonResponse = await response.json();
    console.log(jsonResponse);

    const imageUrl = jsonResponse.url;
    const imageTitle = jsonResponse.title;
    imageElement.src = imageUrl;
    imageElement.alt = imageTitle;
    imageTitleElement.textContent = imageTitle;
}
