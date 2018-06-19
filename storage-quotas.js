if ('storage' in navigator && 'estimate' in navigator.storage) {
    navigator.storage.estimate()
        .then(estimate => {
            const usage = Math.round(estimate.usage / (1024 * 1024));
            const quota = Math.round(estimate.quota / (1024 * 1024));
            const percent = Math.round(estimate.usage / estimate.quota * 100);

            document.getElementById('usage').innerText = usage + "MB em uso";
            document.getElementById('quota').innerText = quota + "MB total";
            document.getElementById('percent').innerText = percent + "% em uso";
        })
}
