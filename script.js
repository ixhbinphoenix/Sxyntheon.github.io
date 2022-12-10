function searchLive() {
    let query = document.getElementById("searchbar").value.toUpperCase();
    if(query == "D" || query == "M" || query == "E" || query == "GE" || query == "SW" || query == "EK" || query == "PL" || query == "MU" || query == "PA" || query == "R" || query == "IF" || query == "PH" || query == "CH" || query == "L" || query  == "BI" || query == "S" || query == "N" || query == "LI") {
        if(query == "E") {
            query = query + "​" //invisible unicode character U+200B, not nice but works
        }
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
function select(input) {  
    let boxes = document.getElementsByClassName(input)
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
    let lesson1 = document.getElementById("1");
    lesson1.addEventListener("click", () => {
        select("1")
    })
    let lesson2 = document.getElementById("2");
    lesson2.addEventListener("click", () => {
        select("2")
    })
    let lesson3 = document.getElementById("3");
    lesson3.addEventListener("click", () => {
        select("3")
    })
    let lesson4 = document.getElementById("4");
    lesson4.addEventListener("click", () => {
        select("4")
    })
    let lesson5 = document.getElementById("5");
    lesson5.addEventListener("click", () => {
        select("5")
    })
    let lesson6 = document.getElementById("6");
    lesson6.addEventListener("click", () => {
        select("6")
    })
    let lesson7 = document.getElementById("7");
    lesson7.addEventListener("click", () => {
        select("7")
    })
    let lesson8 = document.getElementById("8");
    lesson8.addEventListener("click", () => {
        select("8")
    })
    let lesson9 = document.getElementById("9");
    lesson9.addEventListener("click", () => {
        select("9")
    })
    let lesson10 = document.getElementById("10");
    lesson10.addEventListener("click", () => {
        select("10")
    })
}
