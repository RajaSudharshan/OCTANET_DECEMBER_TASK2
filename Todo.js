const inputBox = document.getElementById("input-box");
const priorityBtn = document.getElementById("priorityBtn");
const listContainer = document.getElementById("list-container");
let currentPriority = "high"; // Default priority

function addtask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        let spanPriority = document.createElement("span");
        spanPriority.className = "priority";
        spanPriority.textContent = '(' + currentPriority + ')';
        
        li.textContent = inputBox.value; // Remove the space after inputBox.value
        li.appendChild(spanPriority);
        
        li.classList.add(currentPriority);
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    resetPriorityDropdown();
    saveData();
    
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 3000);
}

function togglePriorityDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function setPriority(priority) {
    currentPriority = priority;
    priorityBtn.innerHTML = "Priority: " + priority;
    togglePriorityDropdown();
}

function resetPriorityDropdown() {
    currentPriority = "high";
    priorityBtn.innerHTML = "Priority";
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();