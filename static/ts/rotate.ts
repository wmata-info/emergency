function updateJSONAndDump(): void {

    let stationElement = document.getElementById("stationId");
    let station_code: string = stationElement ? stationElement.innerText : "";
    let rawData = document.getElementById("rawData");


    let xhr: XMLHttpRequest = new XMLHttpRequest();
    xhr.open('GET', `https://api.wmata.info/backend/station/${station_code}`);
    xhr.send();

    xhr.onreadystatechange = function (): void {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            if (rawData) {
                rawData.innerText = xhr.responseText;
            }
            renderJSON();
        }
    }
}

function renderJSON(): void {
    let station: any = JSON.parse(document.getElementById("rawData")?.innerText ?? "{}");


    let addedGroups: number[] = [0];

    const occupancyStr: string[] = [
        "No Data",
        "Not Crowded",
        "Somewhat Crowded",
        "Full"
    ];

    for (let train in station.TRAINS) {
        let train_data: any = station.TRAINS[train];

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

        let img: HTMLImageElement = document.createElement('img');
        img.src = `/static/svg/${train_data.Line}.svg`;
        img.width = 25;
        let imgCol: HTMLTableCellElement = document.createElement('td');
        imgCol.append(img);

        let destCol: HTMLTableCellElement = document.createElement('td');
        destCol.innerText = train_data.Destination;

        let unit: HTMLSpanElement = document.createElement('span');
        unit.className = 'unit';
        unit.innerText = typeof train_data.Min === 'number'
            ? (train_data.Min === 1 ? "MIN" : "MINS")
            : (train_data.DLY ? "Delay" : (train_data.BRD ? "Boarding" : ""));
        let timeText: Text = document.createTextNode(`${train_data.Min}\u00A0`);
        let timeCol: HTMLTableCellElement = document.createElement('td');
        timeCol.className = train_data.Min;
        timeCol.append(timeText);
        timeCol.append(unit);
        let carsCol: HTMLTableCellElement = document.createElement('td');
        carsCol.innerText = train_data.Car;
        let occuCol: HTMLTableCellElement = document.createElement('td');
        occuCol.innerText = occupancyStr[train_data.Oc];
        let trainRow: HTMLTableRowElement = document.createElement('tr');
        trainRow.id = `train-${train}`;
        trainRow.append(imgCol);
        trainRow.append(destCol);
        trainRow.append(timeCol);
        trainRow.append(carsCol);
        trainRow.append(occuCol);

        if (document.getElementById(`train-${train}`)) {
            document.getElementById(`train-${train}`)?.replaceWith(trainRow);
        } else {
            document.getElementById('trains')?.append(trainRow);
        }
    }

}

renderJSON();

setInterval(
    function (): void {
        updateJSONAndDump();
    }, 5 * 1000
);