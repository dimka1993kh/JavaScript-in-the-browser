const menuButton = document.getElementsByClassName("wrapper-dropdown")[0];
function menu() {
    menuButton.classList.toggle('active');
}

menuButton.onclick = menu;