
const tabsContent = document.getElementsByClassName('tabs-content');
const tabs = Array.from(tabsContent[0].childNodes).filter( element => element.nodeName !== '#text');
//console.log(tabsContent, tabsContent[0], Array.from(tabsContent[0].childNodes).filter( element => element.nodeName !== '#text'))
const tabsNavChild = document.querySelector('.tabs-nav li');
const tabsNav = document.querySelector('.tabs-nav');

let cloneTab = tabsNavChild.cloneNode(true);
tabsNavChild.parentNode.removeChild(tabsNavChild);

let counter = 0;
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

function curentTab() {
    tabs.forEach((tab) => {
        if (this.classList.className === tab.tab.dataset.tabTitle) {
            tab.classList.toggle("hidden");
        }
    })
    
}

Array.from(tabsNav).forEach((el) => {
    console.log(el)
    el[0].addEventListener('click', curentTab)
})









