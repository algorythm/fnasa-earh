const nasaKey = process.env.NASA_KEY;

myFunction();

function myFunction() {
    const dailyImageUrl = `https://api.nasa.gov/planetary/apod?api_key=${nasaKey}`;

    const imageElement = document.getElementById('dailyImage');
    const imageTitleElement = document.getElementById('dailyImageTitle');

    fetch(dailyImageUrl)
        .then(response => response.json())
        .then(jsonResponse => {
            console.log('daily image', jsonResponse)
            const imageUrl = jsonResponse.url;
            const imageTitle = jsonResponse.title;
            imageElement.src = imageUrl;
            imageElement.alt = imageTitle;
            imageTitleElement.textContent = imageTitle;
        });
}
