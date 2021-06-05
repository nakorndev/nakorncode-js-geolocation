const success = (data) => {
    // https://www.google.com/maps?q=<lat>,<long>
    console.log(`https://www.google.com/maps?q=${data.coords.latitude},${data.coords.longitude}`)
}

const error = (error) => {
    console.warn(error)
}

navigator.geolocation.getCurrentPosition(success, error, { enableHighAccuracy: true })
