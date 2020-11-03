import React, { useState } from 'react';

import { API_URL } from '../urls.js';
import { API_KEY } from '../API_KEY.js';

export const TVShowList = () => {
    const TV_URL = `${API_URL}popular?&api_key=${API_KEY}`;
    // eslint-disable-next-line
    const [TVShows, setTVShows] = useState([]);

    console.log('Render');

    fetch(TV_URL)
        .then(respons => respons.json())
        .then(json => console.log(json.results));

    return <section> TV-shows go here </section>
}