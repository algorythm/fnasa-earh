import React from 'react';
import { getDailyImage } from '../nasa/api';

export default function NasaDailyImage() {
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [image, setImage] = React.useState({});

    React.useEffect(() => {
        getDailyImage()
            .then(image => {
                setIsLoaded(true);
                setImage(image);
            }, error => {
                setIsLoaded(true);
                console.error('failed to fetch image: ', error);
            });
    }, []);

    const imageElement = !isLoaded ? <h2>Loading...</h2> : <div>
        <h2>{image.title}</h2>
        <img src={image.url} />
    </div>

    return imageElement;
}
