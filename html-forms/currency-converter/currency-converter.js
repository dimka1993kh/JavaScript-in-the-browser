const select = document.getElementsByTagName('select');
const selectFrom = document.getElementById('from');
const selectTo = document.getElementById('to');

const loader = document.getElementById('loader');
const content = document.getElementById('content');
const result = document.getElementById('result');
const input = document.getElementById('source');

const request = new XMLHttpRequest();
request.addEventListener('load', onLoad);
request.addEventListener('loadstart', startLoad);
request.addEventListener('loadend', endLoad);
request.open('GET', 'https://neto-api.herokuapp.com/currency', true);
request.send();

function onLoad() {
    const currencies = JSON.parse(request.responseText);
    Array.from(select).forEach((element) => {
        element.innerHTML = '<option></option>'.repeat(currencies.length);
        currencies.forEach((currency, index) => {
        element.getElementsByTagName('option')[index].innerHTML = currency.code;
        });
    });
    const optionFrom = selectFrom.getElementsByTagName('option');
    const optionTo = selectTo.getElementsByTagName('option');

    function sum() {
        const objectFrom = currencies.find((item) => {
            return item.code === selectFrom.value;
        })
        const objectTo = currencies.find((item) => {
            return item.code === selectTo.value;
        })
        result.value = input.value * objectFrom.value / objectTo.value;
}   
    input.addEventListener('input', sum);
    selectFrom.addEventListener('input', sum);
    selectTo.addEventListener('input', sum);
}

function startLoad() { 
    loader.classList.remove('hidden');
}
function endLoad() {
    loader.classList.add('hidden');
    content.classList.remove('hidden');
}




