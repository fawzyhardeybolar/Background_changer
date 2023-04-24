let change = document.getElementById('change');

let btn = document.getElementById('btn');

let arr = [
    'yellow',
    'red',
    'blue',
    'brown',
    'pink',
    'purple',
    'burlywood',
    'cyan',
    'magenta'
]


btn.addEventListener('click', () => {
    let randomNumber = Math.floor(Math.random() * 9);
    console.log(randomNumber);
    change.textContent = `You got ${arr[randomNumber]}`

    if (arr[randomNumber] == 'yellow') {
        change.style.fontSize = '32px';
    } else if (arr[randomNumber] == 'red') {
        change.style.fontSize = '42px';
    } else if (arr[randomNumber] == 'blue') {
        change.style.fontSize = '52px';
    } else if (arr[randomNumber] == 'brown') {
        change.style.fontSize = '62px';
    } else if (arr[randomNumber] == 'pink') {
        change.style.fontSize = '72px';
    } else if (arr[randomNumber] == 'purple') {
        change.style.fontSize = '82px';
    } else if (arr[randomNumber] == 'burlywood') {
        change.style.fontSize = '92px';
    } else if (arr[randomNumber] == 'cyan') {
        change.style.fontSize = '102px';
    } else if (arr[randomNumber] == 'magenta') {
        change.style.fontSize = '104px';
    };
    
    // change.style.fontSize = arr[randomNumber];
    document.body.style.backgroundColor = arr[randomNumber];
})