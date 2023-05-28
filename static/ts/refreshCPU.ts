function updateCPUPercentages(): void {
    fetch('https://wmata.info/cpu')
        .then(response => response.text())
        .then(data => console.log(JSON.parse(data)))
        .catch(error => console.error(error));
}

updateCPUPercentages();