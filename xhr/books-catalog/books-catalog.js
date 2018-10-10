const content = document.getElementById('content');
const loadCatalog = new XMLHttpRequest();
loadCatalog.addEventListener('load', onLoad);
loadCatalog.open('GET', 'https://neto-api.herokuapp.com/book/', true);
loadCatalog.send();

function onLoad() {
    const books = JSON.parse(loadCatalog.responseText);
    content.innerHTML = '<li></li>'.repeat(books.length);
    const contentPlace = Array.from(document.querySelectorAll('#content li'));
    contentPlace.forEach((book, number) => {
        book.dataset.title = books[number].title;
        book.dataset.author = books[number].author.name;
        book.dataset.info = books[number].info;
        book.dataset.price = books[number].price;
        book.innerHTML = `<img src="${books[number].cover.small}">`;
    });
}

