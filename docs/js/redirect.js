const API_URL = 'http://127.0.0.1:8000'

getLink = () => {
    let prefix = document.URL.split('/').pop().split('.')[0]
    let params = {
        prefix: prefix
    }
    fetch(API_URL + '/link/?' + new URLSearchParams(params),
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }
    ).then(res => res.json())
        .then(result => {
            console.log("Ссылка", result)
            window.location.replace(result.url);
        }
        )
};

window.onload = () => getLink();