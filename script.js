var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

function makeTimeblocks(hour, existingTodo = "") {
    var currentHour = new Date().getHours();
    var presentPastOrFuture = "future";
    if (currentHour > hour + 9) presentPastOrFuture = "past";
    if (currentHour === hour + 9) presentPastOrFuture = "present";
    var hourName = hours[hour];
    var existingTodo = localStorage.getItem(hourName);
    $(".container").append($(`
    <div class="row time-block">
        <div class="hour col-1">${hourName}</div>
        <textarea name="" id="${hourName}" cols="30" rows="3" class="description col-9 ${presentPastOrFuture}">${existingTodo || ""}</textarea>
        <button class="btn saveBtn col-2">Save</button>
    </div>`));
}

for (var i = 0; i < 9; i++) {
    makeTimeblocks(i);
}

var btns = document.querySelectorAll(".saveBtn");

for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", clickSave);
}

function clickSave(event) {
    var todoValue = (event.target.parentNode.children[1].value);
    var todoKey = event.target.parentNode.children[1].id;

    console.log("key values", todoKey, todoValue);

    localStorage.setItem(todoKey, todoValue);
}

