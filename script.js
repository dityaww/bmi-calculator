const btn = document.getElementById('check')

btn.addEventListener('click', () => {
    let height = document.getElementById('height').value
    let weight = document.getElementById('weight').value

    let result = (weight / (height/100)**2)
    result = result.toFixed(2)
    console.log(result)
    
    let bmi = document.getElementById('bmi')
    bmi.innerHTML = `Your BMI is <span id="bmi2">${result}</span>`


    let status = ""

    if(result < 18.5){
        status = 'Underweight'
    } else if(result >= 18.5 && result < 25){
        status = 'Normal Weight'
    } else if(result >= 25 && result < 30){
        status = 'Overweight'
    } else if(result >= 30){
        status = 'Obesity'
    } else{
        status = 'None'
    }

    let ket = document.getElementById('status')
    ket.innerHTML = `<span id="status2">${status}</span>`
})


