// Store user text input to local storage and print to history-list

function getCity() {
    var cityName =
        document.getElementById("city-name").value;
    document.getElementById(
        "list").innerHTML = cityName;
    localStorage.setItem("#city-name", cityName);
    console.log("cityName: " + localStorage.getItem("#city-name"));
}
