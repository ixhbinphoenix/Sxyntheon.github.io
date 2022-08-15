function searchLive() {
    let query = document.getElementById("searchbar").value.toUpperCase();
    if(query == "D" || query == "M" || query == "E" || query == "GE" || query == "SW" || query == "EK" || query == "PL" || query == "MU" || query == "PA" || query == "R" || query == "IF" || query == "PH" || query == "CH" || query == "L" || query  == "BI" || query == "S" || query == "N" || query == "LI") {
        query = query + ";"
    }
    let boxes = document.querySelectorAll(".selected")
    if(!query) {
        for(var i = 0; i < boxes.length; i++ ) {
            boxes[i].classList.remove("highlight")
            return
        }
    }
    for(var i = 0; i < boxes.length; i++ ) {
        if(boxes[i].textContent.toUpperCase().includes(query)) {
            boxes[i].classList.add("highlight")
        } 
        else {
            boxes[i].classList.remove("highlight")
        }
    }
}
function select(day) {
            let boxes = document.getElementsByClassName(day)
            for(var i = 0; i < boxes.length; i++) {
                if(boxes[i].classList.contains("selected")) {
                    boxes[i].classList.remove("selected")
                    boxes[i].classList.remove("highlight")
                }
                else {
                    boxes[i].classList.add("selected")
                }
            }
}
window.onload = function () {
    let typingTimer;               
    let typeInterval = 500;  
    let searchInput = document.getElementById('searchbar');

    select("monday");
    select("tuesday");
    select("wednesday");
    select("thursday");
    select("friday");
    searchInput.addEventListener('keyup', () => {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(searchLive, typeInterval);
    });
    let monday = document.getElementById("monday");
    monday.addEventListener("click", () => {
        select("monday")
    });
    let tuesday = document.getElementById("tuesday");
    tuesday.addEventListener("click", () => {
        select("tuesday")
    });
    let wednesday = document.getElementById("wednesday");
    wednesday.addEventListener("click", () => {
        select("wednesday")
    });
    let thursday = document.getElementById("thursday");
    thursday.addEventListener("click", () => {
        select("thursday")
    });
    let friday = document.getElementById("friday");
    friday.addEventListener("click", () => {
        select("friday")
    });
}
