import { createClient } from 'pexels';

const KEY = process.env.REACT_APP_KEY;
const client = createClient(KEY);
const query = 'Georgia';


export const commentsAPI = {
    getPhotos() {
        return (
            client.photos.search({ query, orientation: 'landscape', per_page: 50 }).then(photos => photos.photos)
        )
    }
}