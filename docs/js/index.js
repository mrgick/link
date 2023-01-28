const isValidHttpUrl = (str) => {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}

const createLink = () => {
    let divUrl = document.getElementsByClassName("div-url");
    divUrl.hidden = true;
    let urlInvalid = document.getElementById('url-invalid');
    urlInvalid.hidden = true;
    let url = document.getElementById("create-input").value;
    if (!isValidHttpUrl(url)) {
        // console.log('invalid url')
        urlInvalid.hidden = false;
        return 0;
    }
    createLinkByUrl(url).then(result => {
        // console.log("URL created", result)
        let link = document.getElementById('created-url');
        link.href = result.prefix;
        link.innerHTML = new URL(result.prefix, document.URL);
        let divUrl = document.getElementsByClassName("div-url")[0];
        divUrl.hidden = false;
    })
};

document.getElementById("create-btn").addEventListener("click", createLink);
