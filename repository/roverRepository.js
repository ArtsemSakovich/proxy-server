import axios from "axios";

async function fetchRoverImage(nasaApiUrl, apiKey) {
    const url = `${nasaApiUrl}/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`;
    const response = await axios.get(url);

    return response.data.photos[0].img_src;
}

export { fetchRoverImage };