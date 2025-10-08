let myKey = "be2d05c0ad0aa4e2c02659df6b5f4d11"

let placeName = document.getElementById("placeName")
let temp = document.getElementById("temp")
let state = document.getElementById("state")
let minMax = document.getElementById("minMax")

document.getElementById("inputButton").addEventListener("click", function() {
    let funnet = false
    let city_name = inputSearch.value 
    let country_code = inputSearch2.value
    let myAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city_name},${country_code}&appid=${myKey}`

    fetch(myAPI)
        .then(response => response.json())
        .then(data => {
                document.getElementById("container2").style.display = "flex"
                placeName.style.display = "flex"
                state.style.display = "flex"
                minMax.style.display = "flex"

                console.log(data);
                placeName.innerHTML = data.name + ", " + data.sys.country
                temp.innerHTML = Math.round(data.main.temp - 273.15)+"°C"
                
                let status = data.weather[0].description
                state.innerHTML = status.charAt(0).toUpperCase() + status.slice(1)
    
                minMax.innerHTML = Math.round(data.main.temp_min - 273.15)+"°C " + "/ " + Math.round(data.main.temp_max - 273.15)+"°C"
        })
        .catch(error => {
            document.getElementById("container2").style.display = "flex"
            placeName.style.display = "none"
            state.style.display = "none"
            minMax.style.display = "none"
            temp.innerHTML = `Error Message: 404 | You may have written an incorrect country or country code.`
        })

})

document.getElementById("inputSearch").addEventListener("keypress", function(event){
    if (event.key == "Enter") {
        document.getElementById("inputButton").click()
    }
})