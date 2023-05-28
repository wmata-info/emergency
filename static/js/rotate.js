function updateJSONAndDump() {
    var stationElement = document.getElementById("stationId");
    var station_code = stationElement ? stationElement.innerText : "";
    var rawData = document.getElementById("rawData");
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "https://api.wmata.info/backend/station/".concat(station_code));
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            if (rawData) {
                rawData.innerText = xhr.responseText;
            }
            renderJSON();
        }
    };
}
function renderJSON() {
    var _a, _b, _c, _d;
    var station = JSON.parse((_b = (_a = document.getElementById("rawData")) === null || _a === void 0 ? void 0 : _a.innerText) !== null && _b !== void 0 ? _b : "{}");
    var addedGroups = [0];
    var occupancyStr = [
        "No Data",
        "Not Crowded",
        "Somewhat Crowded",
        "Full"
    ];
    for (var train in station.TRAINS) {
        var train_data = station.TRAINS[train];
        if (addedGroups.includes(train_data.Group)) {
            continue;
        }
        addedGroups.push(train_data.Group);
        if (train_data.hasOwnProperty("DLY")) {
            train_data.DLY = "Delay";
        }
        if (train_data.hasOwnProperty("BRD")) {
            train_data.BRD = "Boarding";
        }
        var img = document.createElement('img');
        img.src = "/static/svg/".concat(train_data.Line, ".svg");
        img.width = 25;
        var imgCol = document.createElement('td');
        imgCol.append(img);
        var destCol = document.createElement('td');
        destCol.innerText = train_data.Destination;
        var unit = document.createElement('span');
        unit.className = 'unit';
        unit.innerText = typeof train_data.Min === 'number'
            ? (train_data.Min === 1 ? "MIN" : "MINS")
            : (train_data.DLY ? "Delay" : (train_data.BRD ? "Boarding" : ""));
        var timeText = document.createTextNode("".concat(train_data.Min, "\u00A0"));
        var timeCol = document.createElement('td');
        timeCol.className = train_data.Min;
        timeCol.append(timeText);
        timeCol.append(unit);
        var carsCol = document.createElement('td');
        carsCol.innerText = train_data.Car;
        var occuCol = document.createElement('td');
        occuCol.innerText = occupancyStr[train_data.Oc];
        var trainRow = document.createElement('tr');
        trainRow.id = "train-".concat(train);
        trainRow.append(imgCol);
        trainRow.append(destCol);
        trainRow.append(timeCol);
        trainRow.append(carsCol);
        trainRow.append(occuCol);
        if (document.getElementById("train-".concat(train))) {
            (_c = document.getElementById("train-".concat(train))) === null || _c === void 0 ? void 0 : _c.replaceWith(trainRow);
        }
        else {
            (_d = document.getElementById('trains')) === null || _d === void 0 ? void 0 : _d.append(trainRow);
        }
    }
}
renderJSON();
setInterval(function () {
    updateJSONAndDump();
}, 5 * 1000);
