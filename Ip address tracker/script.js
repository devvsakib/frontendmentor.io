const val = document.getElementById("ipAddress")
const submit = document.getElementById("submit")
const docDiv = document.getElementById("doc-div");
const url = "https://ipgeolocation.abstractapi.com/v1/?api_key=619acadbe8234a1fa82573aef65d9496&ip_address=";
// const url = "http://ip-api.com/json/";
const ip = "103.146.3.66"; // Your IP address
const field = "status,message,continent,continentCode,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,isp,org,as,proxy,hosting,query"
const fetchUrl = url + ip + "?fields=" + field;
let lat = 0;
let lng = 0;

const mapAlert = document.getElementById("map");
(function () {
    fetch("https://ipgeolocation.abstractapi.com/v1/?api_key=619acadbe8234a1fa82573aef65d9496")
        .then(response => response.json())
        .then(data => {
            docDiv.children[0].src = data.flag.png;
            lat = data.latitude
            lng = data.longitude
            docDiv.children[1].children[1].innerText = data.ip_address;
            docDiv.children[2].children[1].innerText = data.city + ', ' + data.country;
            docDiv.children[3].children[1].innerText = data.region_iso_code + ' ' + data.timezone.abbreviation;
            docDiv.children[4].children[1].innerText = data.connection.isp_name;
            val.value = data.ip_address;
            initMap();
            mapAlert.children[1].style.display = "none"
        })
})();

submit.addEventListener("click", () => {
    fetch(url + val.value)
        .then(response => response.json())
        .then(data => {
            lat = data.latitude
            lng = data.longitude
            docDiv.children[0].src = data.flag.png;
            docDiv.children[1].children[1].innerText = data.ip_address;
            docDiv.children[2].children[1].innerText = data.city + ', ' + data.country;
            docDiv.children[3].children[1].innerText = data.region_iso_code + ' ' + data.timezone.abbreviation;
            docDiv.children[4].children[1].innerText = data.connection.isp_name;
            initMap();
            mapAlert.children[1].style.display = "none"
        }
        );
})

function initMap() {
    const uluru = { lat: lat, lng: lng };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: uluru,
    });
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}
