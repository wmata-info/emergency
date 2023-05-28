function updateCPUPercentages() {
    fetch('https://wmata.info/cpu')
        .then(function (response) { return response.text(); })
        .then(function (data) { return console.log(JSON.parse(data)); })["catch"](function (error) { return console.error(error); });
}
updateCPUPercentages();
