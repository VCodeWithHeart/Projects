const form = document.querySelector("form")

form.addEventListener("submit", function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")
    let verdict

    if (height === "" || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`
    }
    else {
        const BMI = (weight / ((height * height) / 10000)).toFixed(2)
        // Show the results
        
    if (BMI < 18.6) {
        verdict = `Under Weight`
        results.innerHTML = `<span>${BMI}</span> <br> ${verdict}`
    } else if (BMI > 18.6 && BMI < 24.9) {
        verdict = `Normal Weight`
        results.innerHTML = `<span>${BMI}</span> <br> ${verdict}`
    }
    else {
        verdict = `OverWeight`
        results.innerHTML = `<span>${BMI}</span> <br> ${verdict}`
    }
    
    }



})    
