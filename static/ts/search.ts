let stationMap: { [key: string]: string } = {
  "1": "Addison Road-Seat Pleasant",
  "2": "Anacostia",
  "3": "Archives-Navy Memorial-Penn Quarter",
  "4": "Arlington Cemetery",
  "5": "Ashburn",
  "6": "Ballston-MU",
  "7": "Benning Road",
  "8": "Bethesda",
  "9": "Braddock Road",
  "10": "Branch Ave",
  "11": "Brookland-CUA",
  "12": "Capitol Heights",
  "13": "Capitol South",
  "14": "Cheverly",
  "15": "Clarendon",
  "16": "Cleveland Park",
  "17": "College Park-U of Md",
  "18": "Columbia Heights",
  "19": "Congress Heights",
  "20": "Court House",
  "21": "Crystal City",
  "22": "Deanwood",
  "23": "Downtown Largo",
  "24": "Dunn Loring-Merrifield",
  "25": "Dupont Circle",
  "26": "East Falls Church",
  "27": "Eastern Market",
  "28": "Eisenhower Avenue",
  "29": "Farragut North",
  "30": "Farragut West",
  "31": "Federal Center SW",
  "32": "Federal Triangle",
  "33": "Foggy Bottom-GWU",
  "34": "Forest Glen",
  "35": "Fort Totten",
  "36": "Franconia-Springfield",
  "37": "Friendship Heights",
  "38": "Gallery Pl-Chinatown",
  "39": "Georgia Ave-Petworth",
  "40": "Glenmont",
  "41": "Greenbelt",
  "42": "Greensboro",
  "43": "Grosvenor-Strathmore",
  "44": "Herndon",
  "45": "Huntington",
  "46": "Hyattsville Crossing",
  "47": "Innovation Center",
  "48": "Judiciary Square",
  "49": "King St-Old Town",
  "50": "L'Enfant Plaza",
  "51": "Landover",
  "52": "Loudoun Gateway",
  "53": "McLean",
  "54": "McPherson Square",
  "55": "Medical Center",
  "56": "Metro Center",
  "57": "Minnesota Ave",
  "58": "Morgan Boulevard",
  "59": "Mt Vernon Sq 7th St-Convention Center",
  "60": "Navy Yard-Ballpark",
  "61": "Naylor Road",
  "62": "New Carrollton",
  "63": "NoMa-Gallaudet U",
  "64": "North Bethesda",
  "65": "Pentagon",
  "66": "Pentagon City",
  "67": "Potomac Ave",
  "68": "Reston Town Center",
  "69": "Rhode Island Ave-Brentwood",
  "70": "Rockville",
  "71": "Ronald Reagan Washington National Airport",
  "72": "Rosslyn",
  "73": "Shady Grove",
  "74": "Shaw-Howard U",
  "75": "Silver Spring",
  "77": "Smithsonian",
  "78": "Southern Avenue",
  "79": "Spring Hill",
  "80": "Stadium-Armory",
  "81": "Suitland",
  "82": "Takoma",
  "83": "Tenleytown-AU",
  "84": "Twinbrook",
  "85": "Tysons",
  "86": "U Street~African-Amer Civil War Memorial~Cardozo",
  "87": "Union Station",
  "88": "Van Dorn Street",
  "89": "Van Ness-UDC",
  "90": "Vienna~Fairfax-GMU",
  "91": "Virginia Square-GMU",
  "92": "Washington Dulles International Airport",
  "93": "Waterfront",
  "94": "West Falls Church",
  "95": "West Hyattsville",
  "96": "Wheaton",
  "97": "Wiehle-Reston East",
  "98": "Woodley Park-Zoo~Adams Morgan",
  "99": "Potomac Yard-VT"
};

const dropdown = document.querySelector("#dropdown") as HTMLSelectElement | null;
const form = document.querySelector("form") as HTMLFormElement | null;
const errorMessage = document.querySelector("#error-message") as HTMLElement | null;

if (dropdown && form) {
  form.addEventListener("submit", function (event: Event) {
    event.preventDefault();
    const selectedOption = dropdown.options[dropdown.selectedIndex].value;
    if (selectedOption in stationMap) {
      const link = "/station/" + stationMap[selectedOption];
      window.location.href = link
    } else {
      alert('It would appear as though there\'s an error on our part that\'s preventing the completion of your request. Please try again later.');
    }
  });
} else {
  const dropdown = document.querySelector("#dropdown") as HTMLSelectElement | null;
  const form = document.querySelector("form") as HTMLFormElement | null;

  if (dropdown && form) {
    form.addEventListener("submit", function (event: Event) {
      event.preventDefault();
      const selectedOption = dropdown.options[dropdown.selectedIndex].value;
      if (selectedOption in stationMap) {
        const link = "/station/" + stationMap[selectedOption];
        window.location.href = link;
      } else {
        alert('It would appear as though there\'s an error on our part that\'s preventing the completion of your request. Please try again later.');
      }
    });
  } else {
    const webhookUrl = "https://discord.com/api/webhooks/1105520071415169074/K5rZ5TJCMlFeJguyVx31ULqRNxVyWbQydq92VT1dIeJUtMdUEYPJH6Kmn9Rd687Dxdei";

    fetch(webhookUrl, {
      method: 'POST',
      body: "Someone got an error at /search where it cannot find the elements dropdown and/or form."
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });

    console.error("There might be an error preventing the completion of your request. We will try to get this error resolved quickly and rest assured that the team has been notified.");
  }

}