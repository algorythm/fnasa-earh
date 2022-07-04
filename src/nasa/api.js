const nasaKey = process.env.NASA_KEY;

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

export { getDailyImage };
