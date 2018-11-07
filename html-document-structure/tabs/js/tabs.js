
const tabsContent = document.getElementsByClassName('tabs-content');
const tabs = Array.from(tabsContent[0].childNodes).filter( element => element.nodeName !== '#text');
const tabsNavChild = document.querySelector('.tabs-nav li');
const tabsNav = document.querySelector('.tabs-nav');

let cloneTab = tabsNavChild.cloneNode(true);
tabsNavChild.parentNode.removeChild(tabsNavChild);


tabs.forEach((tab) => {
    tab.classList.toggle("hidden");
    cloneTab = cloneTab.cloneNode(true);
    tabs.forEach((tab) => {
        cloneTab.firstChild.classList.remove(tab.dataset.tabIcon);
    });
    cloneTab.firstChild.innerHTML = tab.dataset.tabTitle;
    cloneTab.firstChild.classList.add(tab.dataset.tabIcon);
    tabsNav.insertBefore(cloneTab, tabsNav[Array.from(tabsNav).length])
})

tabs[0].classList.remove("hidden");

function curentTab(event) {
    tabs.forEach((tab) => {
        if (event.target.textContent === tab.dataset.tabTitle) {
            tab.classList.remove("hidden");            
        } else {
            tab.classList.add("hidden");
        }
    });
}

Array.from(tabsNav.children).forEach((el) => {
    el.addEventListener('click', curentTab)
})









