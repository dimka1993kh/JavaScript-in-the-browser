const newContacts = JSON.parse(loadContacts());
const contactsList = document.getElementsByClassName('contacts-list')[0];
let string = '';
newContacts.forEach((newContact) => {
    string += `<li data-email = "${newContact.email}" data-phone = "${newContact.phone}"><strong>${newContact.name}</strong></li>`;
})
contactsList.innerHTML = string;
