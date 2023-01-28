const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const getLink = async () => {
    let prefix = document.URL.split('/').pop().split('.')[0];
    try {
        link = await getLinkByPrefix(prefix);
        if (!link.url) {
            throw 'bad url';
        }
        window.location.replace(link.url);
    }
    catch {
        let desc = document.getElementById('decription');
        for (let time = 5; time > 0; time--) {
            desc.innerHTML = 'Bad prefix, redirecting to home page. ' + time.toString() + ' second';
            await sleep(1000);
        }
        window.location.replace(new URL('index.html', document.URL));
    }
};

window.onload = async () => await getLink();
