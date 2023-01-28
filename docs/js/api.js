let API_URL = 'https://link-shortener-5aw5.onrender.com';
// API_URL = 'http://localhost:8000';

const createLinkByUrl = (url) =>
    fetch(API_URL + '/link/',
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "url": url
            })
        }
    ).then(res => res.json());

const getLinkByPrefix = (prefix) =>
    fetch(API_URL + '/link/?' + new URLSearchParams({
        prefix: prefix
    }),
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }
    ).then(res => res.json());
