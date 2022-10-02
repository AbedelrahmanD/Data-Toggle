var toggleActiveElements = document.querySelectorAll("[data-toggle-active]");
var toggleElements = document.querySelectorAll("[data-toggle]");
var toggleContentElements = document.querySelectorAll("[data-toggle-content]");
function hideToggleContentElements(group = null) {
    var elementsToHide = toggleContentElements;

    if (group != null) {
        elementsToHide = document.querySelectorAll(`[data-toggle-group="${group}"][data-toggle-content]`);
    }
    elementsToHide.forEach(el => {
        el.style.display = "none";
    });
}
function showToggleContentElements(group = null) {
    var elementsToShow = toggleContentElements;
    if (group != null) {
        elementsToShow = document.querySelectorAll(`[data-toggle-group="${group}"][data-toggle-content]`);
    }
    elementsToShow.forEach(el => {
        el.style.display = "flex";
    });
}
document.addEventListener("DOMContentLoaded", function () {

    hideToggleContentElements();



    toggleElements.forEach(el => {
        el.onclick = () => {

            var dataToggleValue = event.target.getAttribute("data-toggle");
            var dataToggleGroupt = event.target.getAttribute("data-toggle-group");
            if (dataToggleValue == "all") {
                showToggleContentElements(dataToggleGroupt);
                return;
            }
            hideToggleContentElements(dataToggleGroupt);
            document.querySelectorAll(`[data-toggle-content="${dataToggleValue}"]`).forEach(content => {
                var display = "none";
                if (content.style.display == "none") {
                    display = "flex";
                }
                content.style.display = display;
            });
        }
    });

    toggleActiveElements.forEach(el => {

        el.click();
    });
});