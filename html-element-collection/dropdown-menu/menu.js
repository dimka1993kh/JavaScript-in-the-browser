const menuButton = document.getElementsByClassName("wrapper-dropdown");
const buttons = Array.from(menuButton);
const firstButton = buttons[0];

function menu() {
    firstButton.classList.toggle('active');
}

firstButton.onclick = menu;