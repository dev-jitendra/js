const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    
    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        const bmi = parseInt((weight / ((height * height) / 10000)).toFixed(2));
        //show the result
        results.innerHTML = `<span>${bmi} <br />${typeof(bmi)}</span>`;
        
        
        const info = document.querySelector('#info');
        if (bmi >= 18.6) {
            info.innerHTML = `Your under weighted`
        } else if (bmi >= 24.9) {
            info.innerHTML = `Your normal weighted`
        } else if (bmi < 24.9) {
            info.innerHTML = `Your overweighted`
        }
    };

});