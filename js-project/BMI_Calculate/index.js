

const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height'))
    const weight = parseInt(document.querySelector('#weight'))

    const result = document.querySelector('#results')
    const message = document.querySelector('#message')

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please provide correct Value ${height}`
    }else if (weight === '' || height < 0 || isNaN(weight)) {
        result.innerHTML = `Please provide coorect Value ${weight}`
    } else {
        const bmi = weight / ((height / 100) * (height / 100)).toFixed(2)
        result.innerHTML = `Your BMI is: <span>${bmi}</span>`;
        if (bmi < 18.5) {
            message.innerHTML = `Underweight: Your BMI is ${bmi}`;
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            message.innerHTML = `Normal range: Your BMI is ${bmi}`;
        } else  {
            message.innerHTML = `Overweight: Your BMI is ${bmi}`;
        } 
    }
})