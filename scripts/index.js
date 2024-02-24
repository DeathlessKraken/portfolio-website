let collapseItems = document.getElementsByClassName("projectItem");

for(let i = 0; i < collapseItems.length; i++) {
    collapseItems[i].addEventListener("click", () => {
        collapseItems[i].classList.toggle("active");
        let content = collapseItems[i].nextElementSibling;
        if(content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}