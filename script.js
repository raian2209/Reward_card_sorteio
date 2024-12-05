let usedNumbers = {'Perguntas': [], 'Planetas': []};
// const maxNumbers = 5;
const has_tab = {'Perguntas': 102,'Planetas': 9};
const selectOption = document.getElementById('mySelect');


function generateRandomNumber() {
    // If all numbers have been used, reset the list
    let SelectedValue = selectOption.value;
    maxNumbers = has_tab[SelectedValue];
    if (usedNumbers[SelectedValue].length === maxNumbers) {
        usedNumbers[SelectedValue] = [];
    }
console.log(usedNumbers);
    // Generate a random number that hasn't been used yet
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * maxNumbers) + 1;
    } while (usedNumbers[SelectedValue].includes(randomNumber));
console.log(randomNumber);
    // Add the new number to the usedNumbers list
    usedNumbers[SelectedValue].push(randomNumber);
    // Display the generated number
    // document.getElementById('random-number').src = call_image(randomNumber).then(function (res) {
    //     return res.text();
    // });
    document.getElementById('random-number').src = call_image(SelectedValue,randomNumber);
    // document.getElementById('random-number').innerText = randomNumber;
}

function call_image(SelectedValue,num){
    return `${SelectedValue}/${num}.jpg`;
}
