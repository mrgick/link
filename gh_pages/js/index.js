const API_URL = 'http://127.0.0.1:8000'

isValidHttpUrl = (string) => {
    let url;
    try {
        url = new URL(string);
    } catch (_) {
        return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
}


createLink = () => {
    let divUrl = document.getElementsByClassName("div-url")
    divUrl.hidden = true
    let url = document.getElementById("create-input").value
    if (!isValidHttpUrl(url)) {
        return 0;
    }

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
    ).then(res => res.json())
        .then(
            result => {
                console.log("Ссылка создана", result)
                let link = document.getElementById('created-url')
                link.href = result.prefix
                link.innerHTML = document.URL + result.prefix
                let divUrl = document.getElementsByClassName("div-url")[0]
                divUrl.hidden = false
            }
        )
};

document.getElementById("create-btn").addEventListener("click", createLink);