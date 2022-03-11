import axios from 'axios';

const KEY = "AIzaSyAvptPaBDtR8-uNT8fUEHMCyM4b8XaZrT0";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});