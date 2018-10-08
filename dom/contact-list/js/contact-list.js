const newContacts = JSON.parse(loadContacts());
console.log(newContacts)
const contactsList = document.getElementsByClassName('contacts-list')[0];
let array = [];
newContacts.forEach((newContact) => {
    let ggg = newContact.phone;
    console.log(typeof(`${ggg}`))
    array.push(`<li data-email = ${newContact.email} data-phone = ${ggg}><strong>${newContact.name}</strong></li>`);
})
contactsList.innerHTML = array;
