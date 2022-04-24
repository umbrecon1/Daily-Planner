var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

function makeTimeblocks(hour, existingTodo = ""){
    var currentHour = new Date().getHours();
    var presentPastOrFuture = "future";
    if(currentHour > hour + 9) presentPastOrFuture = "past";
    if(currentHour === hour + 9) presentPastOrFuture = "present";
    $(".container").append($(`
    <div class="row time-block">
        <div class="hour col-1">${hours[hour]}</div>
        <textarea name="" id="" cols="30" rows="3" class="description col-9 ${presentPastOrFuture}">${existingTodo}</textarea>
        <div class="btn saveBtn col-2">Save</div>
    </div>`));
}

for(var i = 0; i< 9; i++){
    makeTimeblocks(i);
}